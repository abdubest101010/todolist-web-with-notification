import prisma from '@/prisma/client';

export async function POST(req) {
  const { username } = await req.json();

  try {
    const existingUser = await prisma.user.findUnique({ where: { username } });

    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    const user = await prisma.user.create({
      data: { username },
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' ,error}), { status: 500 });
  }
}
