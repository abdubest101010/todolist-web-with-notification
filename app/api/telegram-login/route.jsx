import prisma from '@/prisma/client';

export async function POST(req) {
  try {
    const { user } = await req.json();
    const username = user?.username;

    if (!username) {
      return new Response(JSON.stringify({ error: 'Username not provided by Telegram' }), {
        status: 400,
      });
    }

    let existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (!existingUser) {
      existingUser = await prisma.user.create({
        data: { username },
      });
    }

    return new Response(JSON.stringify({ username: existingUser.username }), {
      status: 200,
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
