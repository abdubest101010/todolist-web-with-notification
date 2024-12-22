import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request) {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const tasks = await prisma.task.findMany({
      where: { userId: user.id },
      orderBy: { scheduledAt: 'asc' },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Internal Server Error in GET:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, description, scheduledAt, username, telegramChatId, timezoneOffset } = await request.json();

    if (!username || !title || !scheduledAt || !telegramChatId) {
      return NextResponse.json({ error: "Title, scheduledAt, username, and telegramChatId are required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Parse scheduledAt as a UTC date and adjust based on timezoneOffset
    const utcScheduledAt = new Date(scheduledAt);
    const userScheduledAt = new Date(utcScheduledAt.getTime() - timezoneOffset * 60000); // Adjust back to user time

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        createdAt: new Date(),
        scheduledAt: utcScheduledAt, // Stored in UTC
        userId: user.id,
        telegramChatId,
      },
    });

    // Schedule the webhook using UTC time
    const cronhookPayload = {
      title,
      description,
      url: process.env.MAKE_WEBHOOK_URL,
      timezone: "UTC",
      method: "POST",
      contentType: "application/json",
      isRecurring: false,
      runAt: utcScheduledAt.toISOString(), // UTC time for webhook
      sendCronhookObject: true,
      sendFailureAlert: true,
      payload: {
        telegramChatId,
        description,
        title,
        username,
        scheduledAt: userScheduledAt.toISOString(), // User time in payload
      },
    };

    const response = await fetch("https://api.cronhooks.io/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CRONHOOKS_API_TOKEN}`,
      },
      body: JSON.stringify(cronhookPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cronhook API Error:", response.status, errorText);
      throw new Error(`Failed to schedule webhook: ${response.status} - ${errorText}`);
    }

    const cronhookResponse = await response.json();

    return NextResponse.json({ ...newTask, cronhookScheduleId: cronhookResponse.id }, { status: 201 });
  } catch (error) {
    console.error("Internal Server Error in POST:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
