import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

// GET: Retrieve tasks for the logged-in user
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    const tasks = await prisma.task.findMany({
      where: { userId: userId },
      orderBy: {
        createdAt: 'desc', 
      },
    });

    if (!tasks.length) {
      return NextResponse.json({ message: 'No tasks found' }, { status: 404 });
    }

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json({ message: 'Error fetching tasks', error: error.message }, { status: 500 });
  }
}

// POST: Create a new task
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { title, description, scheduledAt } = await request.json();

    if (!title || !description || !scheduledAt) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const userId = session.user.id;

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        scheduledAt: new Date(scheduledAt),
        userId,
      },
    });

    return NextResponse.json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json({ message: 'Error creating task', error: error.message }, { status: 500 });
  }
}
