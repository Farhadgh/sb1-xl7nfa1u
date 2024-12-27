import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/admin/tasks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(response.data);
      setLoading(false);
    } catch (err) {
      setError('خطا در دریافت تسک‌ها');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/admin/task/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (err) {
      setError('خطا در حذف تسک');
    }
  };

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task._id} className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{task.name}</h3>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
              {task.points} امتیاز
            </span>
          </div>
          <p className="mt-2 text-gray-600">{task.description}</p>
          <button
            onClick={() => handleDelete(task._id)}
            className="mt-2 text-sm text-red-600 hover:text-red-800"
          >
            حذف
          </button>
        </div>
      ))}
    </div>
  );
}
export default TaskList