"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTelegram } from "@/lib/TelegramProvider";

const AddTaskPage = () => {
  const { username, telegramChatId } = useTelegram();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timerSetting, setTimerSetting] = useState('');
  const [utcTime, setUtcTime] = useState('');
  const [userTime, setUserTime] = useState('');
  const router = useRouter();

  const handleTimerChange = (event) => {
    const localTime = event.target.value;
    setTimerSetting(localTime);

    // Convert local time to UTC
    const date = new Date(localTime);
    const utcDate = new Date(date.toUTCString());
    setUtcTime(utcDate.toISOString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!username || !telegramChatId) {
      setError("Username or Telegram Chat ID is not set");
      setLoading(false);
      return;
    }

    try {
      // Convert the local time to UTC
      const scheduledAtUTC = new Date(scheduledAt).toISOString();

      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          scheduledAt: scheduledAtUTC, // Send the UTC time
          username,
          telegramChatId,
          timerSetting: utcTime
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const scheduledUtcTime = new Date(responseData.scheduledAt);
        const localTime = new Date(scheduledUtcTime.toLocaleString());
        setUserTime(localTime.toISOString());
        router.push("/");
      } else {
        const errorData = await response.json();
        setError(errorData.error || response.statusText);
      }
    } catch (error) {
      setError("Error adding task: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto sm:max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-2xl">
        Add New Task
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="scheduledAt"
            className="block text-sm font-medium mb-2"
          >
            Scheduled At
          </label>
          <input
            type="datetime-local"
            id="scheduledAt"
            value={scheduledAt}
            onChange={(e) => setScheduledAt(e.target.value)}
            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="timer" className="block text-sm font-medium mb-2">
            Timer Setting
          </label>
          <input
            type="datetime-local"
            id="timer"
            value={timerSetting}
            onChange={handleTimerChange}
            className="block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {error && (
          <div className="text-red-500 mb-4">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-colors duration-300"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>
      {userTime && (
        <div className="mt-4">
          <p>Scheduled Time (Local): {userTime}</p>
        </div>
      )}
    </div>
  );
};

export default AddTaskPage;
