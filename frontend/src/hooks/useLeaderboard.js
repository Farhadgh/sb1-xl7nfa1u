import { useState, useEffect } from 'react';
import axios from 'axios';

export function useLeaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/api/leaderboard');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('خطا در دریافت اطلاعات لیدربورد');
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return { users, loading, error };
}