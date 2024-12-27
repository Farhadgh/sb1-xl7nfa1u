function LeaderboardItem({ user, rank }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-3 last:border-0">
      <div className="flex items-center gap-4">
        <span className={`w-8 text-center font-bold ${rank <= 3 ? 'text-yellow-500' : 'text-gray-500'}`}>
          {rank}
        </span>
        <span className="font-medium">{user.telegramId}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-blue-600">{user.points}</span>
        <span className="text-sm text-gray-500">امتیاز</span>
      </div>
    </div>
  );
}

export default LeaderboardItem;