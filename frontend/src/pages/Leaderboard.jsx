import { useLeaderboard } from '../hooks/useLeaderboard';
import LeaderboardList from '../components/leaderboard/LeaderboardList';

function Leaderboard() {
  const { users, loading, error } = useLeaderboard();

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-lg">در حال بارگذاری...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-2xl font-bold">برترین‌ها</h1>
      <LeaderboardList users={users} />
    </div>
  );
}

export default Leaderboard;