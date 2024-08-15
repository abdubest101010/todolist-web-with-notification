'use client';
import Script from 'next/script';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const TelegramContext = createContext();

export const TelegramProvider = ({ children }) => {
  const [webApp, setWebApp] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const app = window.Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
      const user = app.initDataUnsafe.user;
      if (user && user.username) {
        setUsername(user.username);
        localStorage.setItem('username', user.username);
      }
    }
  }, []);

  const value = useMemo(() => {
    return {
      webApp,
      username,
    };
  }, [webApp, username]);

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
