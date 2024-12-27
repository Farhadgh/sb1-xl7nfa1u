import { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/admin/task', 
        { name, description, points: Number(points) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onTaskCreated();
      setName('');
      setDescription('');
      setPoints('');
    } catch (err) {
      setError('خطا در ایجاد تسک');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          نام تسک
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          توضیحات
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
          rows="3"
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          امتیاز
        </label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          className="w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
          min="0"
          required
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        ایجاد تسک
      </button>
    </form>
  );
}
export default TaskForm