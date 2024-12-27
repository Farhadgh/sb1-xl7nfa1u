import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import TaskForm from '../components/tasks/TaskForm';
import TaskList from '../components/tasks/TaskList';

function Dashboard() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold">ایجاد تسک جدید</h2>
        <TaskForm onTaskCreated={() => {
          // Refresh task list after creation
          window.location.reload();
        }} />
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold">لیست تسک‌ها</h2>
        <TaskList />
      </div>
    </div>
  );
}