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
    const { title, description, scheduledAt, username, telegramChatId } = await request.json();

    if (!username || !title || !scheduledAt || !telegramChatId) {
      return NextResponse.json({ error: 'Title, scheduledAt, username, and telegramChatId are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        createdAt: new Date(),
        scheduledAt: new Date(scheduledAt),
        userId: user.id,
        telegramChatId, // Use the telegramChatId from the request
      },
    });
     console.log(newTask)
     const scheduledTime = new Date(scheduledAt).getTime();
     const currentTime = new Date().getTime();
     console.log(scheduledTime, "sch")
     console.log(currentTime)
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error('MAKE_WEBHOOK_URL environment variable is not set');
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        title,
        description,
        telegramChatId, 
        scheduledAt,
      }),
    });

    return NextResponse.json({ 
      ...newTask, 
      telegramChatId 
    }, { status: 201 });
    
  } catch (error) {
    console.error('Internal Server Error in POST:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
