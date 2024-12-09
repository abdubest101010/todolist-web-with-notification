"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Context for Telegram data
export const TelegramContext = createContext();

export const TelegramProvider = ({ children }) => {
  const [webApp, setWebApp] = useState(null);
  const [username, setUsername] = useState("");
  const [telegramChatId, setTelegramChatId] = useState("");
  const [initialized, setInitialized] = useState(false); // For ensuring the app is initialized

  useEffect(() => {
    // Ensure that the Telegram script is loaded before initializing
    const initializeTelegram = () => {
      const app = window.Telegram?.WebApp;
      if (app) {
        app.ready(); // Mark the app as ready
        setWebApp(app);

        const user = app.initDataUnsafe?.user; // Retrieve user details
        if (user) {
          setUsername(user.username || "");
          setTelegramChatId(user.id?.toString() || ""); // Convert user ID to string
          registerUser(user.username, user.id?.toString());
        } else {
          console.error("Telegram user data is missing or incomplete:", user);
        }

        setInitialized(true); // Mark initialization as complete
      } else {
        console.error("Telegram WebApp is not available");
      }
    };

    if (typeof window !== "undefined" && window.Telegram) {
      initializeTelegram();
    } else {
      const checkScriptInterval = setInterval(() => {
        if (window.Telegram) {
          clearInterval(checkScriptInterval); // Stop checking once Telegram is available
          initializeTelegram();
        }
      }, 100); // Check every 100ms
    }
  }, []);

  const registerUser = async (username, chatId) => {
    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          chatId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }
      const data = await response.json();
      console.log("User registered:", data.username);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const value = useMemo(
    () => ({
      webApp,
      username,
      telegramChatId,
      initialized, // Useful for checking if Telegram is ready
    }),
    [webApp, username, telegramChatId, initialized]
  );

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => {
  return useContext(TelegramContext);
};
