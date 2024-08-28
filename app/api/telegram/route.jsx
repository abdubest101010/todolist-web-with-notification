import prisma from '@/prisma/client';
import TelegramBot from 'node-telegram-bot-api';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: false });

const sendWelcomeMessage = (chatId, username) => {
  const message = `Welcome to the app, ${username}! We're delighted to have you. This app is designed to help you manage your tasks and get notified!\n\nTo get started, visit: https://t.me/todolistwithNotification_bot/todo`;
  bot.sendMessage(chatId, message).catch((error) => {
    console.error('Error sending message:', error);
  });
};

export async function POST(req) {
  try {
    const { username, chatId } = await req.json();
    
    if (!username || !chatId) {
      return new Response(JSON.stringify({ error: 'Username or Chat ID not provided by Telegram' }), { status: 400 });
    }

    // Ensure chatId is a string
    const chatIdString = String(chatId);

    let existingUser = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Username already exists' }), { status: 400 });
    }
    if (!existingUser) {
      existingUser = await prisma.user.create({
        data: { username, telegramChatId: chatIdString },
      });
      sendWelcomeMessage(chatIdString, username);
    }

    return new Response(JSON.stringify({ username: existingUser.username }), { status: 200 });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
