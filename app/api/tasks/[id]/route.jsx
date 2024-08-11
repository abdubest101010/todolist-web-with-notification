import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

// GET: Retrieve a specific task by ID (optional if you want to keep it)
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    });

    if (!task) {
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    return NextResponse.json({ message: 'Error fetching task', error: error.message }, { status: 500 });
  }
}

// PUT: Update an existing task
export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const { title, description, scheduledAt } = await request.json();

    if (!title || !description || !scheduledAt) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        scheduledAt: new Date(scheduledAt),
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json({ message: 'Error updating task', error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a specific task by ID
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;

    const task = await prisma.task.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ message: 'Error deleting task', error: error.message }, { status: 500 });
  }
}
