import prisma from '@/prisma/client';
import TelegramBot from 'node-telegram-bot-api';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: false });

const sendWelcomeMessage = (chatId, username) => {
  const message = `Welcome to the app, ${username} , we are delighted to have you and this app is designed to put your plan and get notified!`;
  console.log(`Sending message: "${message}" to chat ID: ${chatId}`);
  bot.sendMessage(chatId, message).then(response => {
    console.log('Message sent successfully:', response);
  }).catch(error => {
    console.error('Error sending message:', error);
  });
};

export async function POST(req) {
  try {
    const { user } = await req.json();
    const username = user?.username;
    const chatId = user?.id; 

    if (!username || !chatId) {
      console.error('Username or Chat ID not provided by Telegram');
      return new Response(JSON.stringify({ error: 'Username or Chat ID not provided by Telegram' }), {
        status: 400,
      });
    }

    let existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (!existingUser) {
      console.log('New user detected. Registering user:', username);
      existingUser = await prisma.user.create({
        data: { username },
      });
      sendWelcomeMessage(chatId, username); 
    } else {
      console.log('User already exists:', username);
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
