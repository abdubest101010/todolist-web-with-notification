"use client";

import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";

const AddTaskPage = () => {
  const { username } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      console.error("Username is not set");
      return;
    }

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, scheduledAt, username }),
      });

      if (response.ok) {
        window.location.href = "/"; // Redirect to homepage or tasks list
      } else {
        console.error("Error adding task:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding task:", error);
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
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-colors duration-300"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskPage;
