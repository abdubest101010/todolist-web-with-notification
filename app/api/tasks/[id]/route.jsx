// app/api/tasks/[id]/route.js
import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const idNumber = parseInt(id, 10);

    if (isNaN(idNumber)) {
      return NextResponse.json({ error: 'Invalid Task ID' }, { status: 400 });
    }

    const url = new URL(request.url);
    const username = url.searchParams.get('username');

    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const task = await prisma.task.findFirst({
      where: { id: idNumber, userId: user.id },
    });

    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const idNumber = parseInt(id, 10);

    if (isNaN(idNumber)) {
      return NextResponse.json({ error: 'Invalid Task ID' }, { status: 400 });
    }

    const { title, description, scheduledAt, username } = await request.json();

    if (!username || !title || !description || !scheduledAt) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const parsedDate = new Date(scheduledAt);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: 'Invalid scheduledAt date' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updatedTask = await prisma.task.update({
      where: { id: idNumber },
      data: {
        title,
        description,
        scheduledAt: parsedDate,
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const idNumber = parseInt(id, 10);

    if (isNaN(idNumber)) {
      return NextResponse.json({ error: 'Invalid Task ID' }, { status: 400 });
    }

    await prisma.task.delete({
      where: { id: idNumber },
    });

    return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
