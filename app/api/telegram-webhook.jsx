import { PrismaClient } from '@prisma/client';
import { signIn } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Request received:', req.body);
    const { message } = req.body;

    if (message && message.text) {
      const username = message.from.username;
      const chatId = message.chat.id;

      try {
        // Check if user exists in the database
        let user = await prisma.user.findUnique({ where: { username } });

        // If user does not exist, create a new user
        if (!user) {
          user = await prisma.user.create({
            data: { username },
          });
          console.log('User created:', user);
        }

        // Automatically log the user in by creating a session
        await signIn('credentials', {
          redirect: false,
          username: user.username,
        });
        console.log('User signed in:', user);

        // Fetch user's to-do list
        const tasks = await prisma.task.findMany({
          where: { username: user.username },
          orderBy: { createdAt: 'desc' },
        });

        // Format the tasks for Telegram
        const taskList = tasks.map(task => `- ${task.title}: ${task.description}`).join('\n');
        console.log('Tasks fetched:', taskList);

        // Send a response to Telegram
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Hello ${username}, here is your to-do list:\n\n${taskList}`,
          }),
        });

        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error handling Telegram webhook:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(400).json({ error: 'Bad Request' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
