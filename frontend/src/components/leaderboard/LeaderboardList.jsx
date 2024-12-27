import LeaderboardItem from './LeaderboardItem';

function LeaderboardList({ users }) {
  return (
    <div className="divide-y divide-gray-100">
      {users.map((user, index) => (
        <LeaderboardItem 
          key={user._id} 
          user={user} 
          rank={index + 1} 
        />
      ))}
    </div>
  );
}

export default LeaderboardList;