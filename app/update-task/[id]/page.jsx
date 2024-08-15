'use client';

import { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';

const UpdateTaskPage = ({ params }) => {
  const { username } = useContext(UserContext);
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [scheduledAt, setScheduledAt] = useState('');
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`/api/tasks/${id}?username=${username}`);
        if (response.ok) {
          const data = await response.json();
          setTask(data);
          setTitle(data.title);
          setDescription(data.description);
          setScheduledAt(new Date(data.scheduledAt).toISOString().slice(0, 16));
        } else {
          console.error('Error fetching task:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    fetchTask();
  }, [id, username]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!username) {
      console.error('Username is not set');
      return;
    }

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, scheduledAt, username }),
      });

      if (response.ok) {
        router.push('/'); // Redirect to homepage or tasks list
      } else {
        console.error('Error updating task:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Task</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="scheduledAt" className="block mb-2">Scheduled At</label>
          <input
            type="datetime-local"
            id="scheduledAt"
            value={scheduledAt}
            onChange={(e) => setScheduledAt(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTaskPage;
