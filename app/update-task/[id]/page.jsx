'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function UpdateTask() {
  const router = useRouter();
  const { id } = useParams();
  const [task, setTask] = useState({ title: '', description: '', scheduledAt: '' });
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`/api/tasks/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch task: ${res.statusText}`);
        }
        const data = await res.json();
        setTask({
          title: data.title,
          description: data.description,
          scheduledAt: new Date(data.scheduledAt).toISOString().slice(0, 16),
        });
      } catch (error) {
        setError('An error occurred: ' + error.message);
      } finally {
        setIsFetching(false);
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!task.title || !task.description || !task.scheduledAt) {
      setError('All fields are required');
      return;
    }

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Failed to update task');
      } else {
        setTask({ title: '', description: '', scheduledAt: '' });
        router.push('/');
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Update Task</h1>
        <h2 className="text-center mb-4">Current title: <strong>{task.title}</strong></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Scheduled At</label>
            <input
              type="datetime-local"
              onChange={(e) => setTask({ ...task, scheduledAt: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}
