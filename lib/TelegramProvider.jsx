"use client";

import Script from 'next/script';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const TelegramContext = createContext();

export const TelegramProvider = ({ children }) => {
  const [webApp, setWebApp] = useState(null);
  const [username, setUsername] = useState('');
  const [telegramChatId, setTelegramChatId] = useState('');

  useEffect(() => {
    const app = window.Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
      const user = app.initDataUnsafe?.user;
      if (user) {
        setUsername(user.username || '');
        setTelegramChatId(user.id?.toString() || ''); // Convert user ID to string for consistency
        registerUser(user.username, user.id?.toString());
      } else {
        console.error('Telegram user data is missing or incomplete:', user);
      }
    } else {
      console.error('Telegram WebApp not available');
    }
  }, []);

  const registerUser = async (username, chatId) => {
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username, 
          chatId,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to register user');
      }
      const data = await response.json();
      console.log('User registered:', data.username);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const value = useMemo(() => {
    return {
      webApp,
      username,
      telegramChatId,
    };
  }, [webApp, username, telegramChatId]);

  return (
    <TelegramContext.Provider value={value}>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
