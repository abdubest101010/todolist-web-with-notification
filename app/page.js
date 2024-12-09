'use client';

import { useState, useEffect } from 'react';
import { useTelegram } from '@/lib/TelegramProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const HomePage = () => {
  const { username } = useTelegram();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!username) return;

      try {
        const response = await fetch(`/api/tasks?username=${username}`);
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          console.error('Error fetching tasks:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [username]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task.id !== id));
      } else {
        console.error('Error deleting task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4"> 
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold">Your Tasks</h1>
      <Link
        href="/add-task"
        className="bg-blue-500 text-white px-4 py-2 rounded text-lg"
      >
        Add New Task
      </Link>
    </div>
    {tasks.length > 0 ? (
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border p-4 rounded shadow-sm bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold">Title: {task.title}</h2>
              <p className="text-gray-700 text-xl">Description: {task.description}</p>
              <p className="text-gray-500 text-xl">
                Scheduled at: {new Date(task.scheduledAt).toLocaleString()}
              </p>
            </div>
            <div className="flex justify-end space-x-2 mt-4"> {/* Aligning buttons at the bottom right */}
              <Link
                href={`/update-task/${task.id}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded text-lg flex items-center justify-center" // Centered text
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded text-lg flex items-center justify-center" // Centered text
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p>No tasks available</p>
    )}
  </div>
  
  );
};

export default HomePage;
