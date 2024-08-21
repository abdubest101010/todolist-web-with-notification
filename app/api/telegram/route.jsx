import prisma from '@/prisma/client';
import TelegramBot from 'node-telegram-bot-api';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: false });

const sendWelcomeMessage = (chatId, username) => {
  const message = `Welcome to the app, ${username}! We're delighted to have you. This app is designed to help you manage your tasks and get notified!`;
  bot.sendMessage(chatId, message).catch((error) => {
    console.error('Error sending message:', error);
  });
};

export async function POST(req) {
  try {
    const { user } = await req.json();
    const username = user?.username;
    const chatId = user?.id;

    if (!username || !chatId) {
      return new Response(JSON.stringify({ error: 'Username or Chat ID not provided by Telegram' }), {
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
      sendWelcomeMessage(chatId, username);
    }

    return new Response(JSON.stringify({ username: existingUser.username }), {
      status: 200,
    });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
