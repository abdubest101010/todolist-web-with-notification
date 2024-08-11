'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/login');
      return;
    }

    const fetchTasks = async () => {
      try {
        const res = await fetch('/api/tasks');
        if (!res.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const tasksData = await res.json();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };

    fetchTasks();
  }, [session, status, router]);

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      } else {
        const data = await res.json();
        console.error('Error deleting task:', data.message);
      }
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
  };

  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Your Tasks</h1>
          <button
            onClick={() => router.push('/add-task')}
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="p-4 bg-white shadow-md rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{task.title}</h2>
                  <p className="text-gray-600">{task.description}</p>
                  <p className="text-gray-400 text-sm">{new Date(task.scheduledAt).toLocaleString()}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => router.push(`/update-task/${task.id}`)}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
