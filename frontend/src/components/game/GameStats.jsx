function GameStats({ points, gamePoints }) {
  return (
    <div className="text-center space-y-2">
      <div className="text-2xl font-bold text-gray-800">
        امتیاز کل: {points}
      </div>
      <div className="text-lg text-gray-600">
        امتیاز بازی: {gamePoints}
      </div>
    </div>
  );
}

export default GameStats;