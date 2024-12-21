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
        telegramChatId,
      },
    });

    console.log('New Task Created:', newTask);

    const cronhookApiUrl = 'https://api.cronhooks.io/schedules';
    const token = process.env.CRONHOOKS_API_TOKEN; // Ensure this is set in your .env file

const cronhookPayload = {
  title, // Title of the webhook schedule
  description, // Description of the webhook schedule
  url: process.env.MAKE_WEBHOOK_URL, // Webhook URL to trigger
  timezone: 'UTC', // IANA Timezone
  method: 'POST', // HTTP Method
  contentType: 'application/json', // Content type of the webhook
  isRecurring: false, // Non-recurring schedule
  runAt: new Date(scheduledAt).toISOString(), // Scheduled time in ISO format
  sendCronhookObject: true, // Include Cronhook metadata
  sendFailureAlert: true, // Send failure alerts
  payload: {
    telegramChatId, // Custom data
    description,
    title,
    username,
    scheduledAt: new Date(scheduledAt).toISOString(),
  },
};


    const response = await fetch(cronhookApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cronhookPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cronhook API Error:', response.status, errorText);
      throw new Error(`Failed to schedule webhook: ${response.status} - ${errorText}`);
    }

    const cronhookResponse = await response.json();
    console.log('Cronhook Response:', cronhookResponse);

    return NextResponse.json({
      ...newTask,
      cronhookScheduleId: cronhookResponse.id, // Return the Cronhook schedule ID for reference
    }, { status: 201 });
  } catch (error) {
    console.error('Internal Server Error in POST:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}import { NextResponse } from 'next/server';
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
        telegramChatId,
      },
    });

    console.log('New Task Created:', newTask);

    const cronhookApiUrl = 'https://api.cronhooks.io/schedules';
    const token = process.env.CRONHOOKS_API_TOKEN; // Ensure this is set in your .env file

const cronhookPayload = {
  title, // Title of the webhook schedule
  description, // Description of the webhook schedule
  url: process.env.MAKE_WEBHOOK_URL, // Webhook URL to trigger
  timezone: 'UTC', // IANA Timezone
  method: 'POST', // HTTP Method
  contentType: 'application/json', // Content type of the webhook
  isRecurring: false, // Non-recurring schedule
  runAt: new Date(scheduledAt).toISOString(), // Scheduled time in ISO format
  sendCronhookObject: true, // Include Cronhook metadata
  sendFailureAlert: true, // Send failure alerts
  payload: {
    telegramChatId, // Custom data
    description,
    title,
    username,
    scheduledAt: new Date(scheduledAt).toISOString(),
  },
};


    const response = await fetch(cronhookApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cronhookPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cronhook API Error:', response.status, errorText);
      throw new Error(`Failed to schedule webhook: ${response.status} - ${errorText}`);
    }

    const cronhookResponse = await response.json();
    console.log('Cronhook Response:', cronhookResponse);

    return NextResponse.json({
      ...newTask,
      cronhookScheduleId: cronhookResponse.id, // Return the Cronhook schedule ID for reference
    }, { status: 201 });
  } catch (error) {
    console.error('Internal Server Error in POST:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}import { NextResponse } from 'next/server';
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
        telegramChatId,
      },
    });

    console.log('New Task Created:', newTask);

    const cronhookApiUrl = 'https://api.cronhooks.io/schedules';
    const token = process.env.CRONHOOKS_API_TOKEN; // Ensure this is set in your .env file

const cronhookPayload = {
  title, // Title of the webhook schedule
  description, // Description of the webhook schedule
  url: process.env.MAKE_WEBHOOK_URL, // Webhook URL to trigger
  timezone: 'UTC', // IANA Timezone
  method: 'POST', // HTTP Method
  contentType: 'application/json', // Content type of the webhook
  isRecurring: false, // Non-recurring schedule
  runAt: new Date(scheduledAt).toISOString(), // Scheduled time in ISO format
  sendCronhookObject: true, // Include Cronhook metadata
  sendFailureAlert: true, // Send failure alerts
  payload: {
    telegramChatId, // Custom data
    description,
    title,
    username,
    scheduledAt: new Date(scheduledAt).toISOString(),
  },
};


    const response = await fetch(cronhookApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cronhookPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cronhook API Error:', response.status, errorText);
      throw new Error(`Failed to schedule webhook: ${response.status} - ${errorText}`);
    }

    const cronhookResponse = await response.json();
    console.log('Cronhook Response:', cronhookResponse);

    return NextResponse.json({
      ...newTask,
      cronhookScheduleId: cronhookResponse.id, // Return the Cronhook schedule ID for reference
    }, { status: 201 });
  } catch (error) {
    console.error('Internal Server Error in POST:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
