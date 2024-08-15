import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  const username = url.searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const task = await prisma.task.findUnique({
      where: { id: parseInt(id), userId: user.id }
    });

    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  const { title, description, scheduledAt, username } = await request.json();

  if (!username || !title || !description || !scheduledAt) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        scheduledAt: new Date(scheduledAt),
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  try {
    await prisma.task.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
