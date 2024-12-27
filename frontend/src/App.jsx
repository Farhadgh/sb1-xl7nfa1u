import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import UserProfile from './pages/UserProfile';
import Leaderboard from './pages/Leaderboard';
import Game from './pages/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/game" element={<Game />} />
      </Route>
    </Routes>
  );
}