import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request) {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    let user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      user = await prisma.user.create({
        data: { username }
      });
    }

    const tasks = await prisma.task.findMany({
      where: { userId: user.id },
      orderBy: { scheduledAt: 'asc' }
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, description, scheduledAt, username } = await request.json();

    if (!username || !title || !description || !scheduledAt) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    let user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      user = await prisma.user.create({
        data: { username }
      });
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        scheduledAt: new Date(scheduledAt),
        userId: user.id,
      },
    });

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
