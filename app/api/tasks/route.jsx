import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request) {
  const url = new URL(request.url); // Preserve the URL and search params
  const username = url.searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const tasks = await prisma.task.findMany({
      where: { userId: user.id },
      orderBy: { scheduledAt: "asc" },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Internal Server Error in GET:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const url = new URL(request.url); // Keep the URL object for consistency
    const { title, description, scheduledAt, username, telegramChatId, localOffsetMinutes } = await request.json();

    // Ensure all required fields are present
    if (!title || !scheduledAt || !username || !telegramChatId) {
      return NextResponse.json(
        { error: "Title, scheduledAt, username, and telegramChatId are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Adjust `scheduledAt` to UTC
    const scheduledDateUTC = new Date(new Date(scheduledAt).getTime() - localOffsetMinutes * 60 * 1000);

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        createdAt: new Date(),
        scheduledAt: scheduledDateUTC, // Store in UTC
        userId: user.id,
        telegramChatId,
      },
    });

    console.log("New Task Created:", newTask);

    // Schedule task with Cronhooks
    const cronhookApiUrl = "https://api.cronhooks.io/schedules";
    const token = process.env.CRONHOOKS_API_TOKEN; // Ensure the token is set in .env

    const cronhookPayload = {
      title,
      description,
      url: process.env.MAKE_WEBHOOK_URL, // Webhook URL to trigger
      timezone: "UTC", // Use UTC timezone
      method: "POST",
      contentType: "application/json",
      isRecurring: false,
      runAt: scheduledDateUTC.toISOString(), // Ensure it's in UTC
      sendCronhookObject: true,
      sendFailureAlert: true,
      payload: {
        telegramChatId,
        description,
        title,
        username,
        scheduledAt: scheduledDateUTC.toISOString(),
      },
    };

    const response = await fetch(cronhookApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cronhookPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cronhook API Error:", response.status, errorText);
      throw new Error(`Failed to schedule webhook: ${response.status} - ${errorText}`);
    }

    const cronhookResponse = await response.json();
    console.log("Cronhook Response:", cronhookResponse);

    return NextResponse.json(
      {
        ...newTask,
        cronhookScheduleId: cronhookResponse.id, // Include Cronhook ID for tracking
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Internal Server Error in POST:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
