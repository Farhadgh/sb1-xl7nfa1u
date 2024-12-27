import { useState } from 'react';
import axios from 'axios';

export function useTapGame() {
  const [points, setPoints] = useState(0);
  const [gamePoints, setGamePoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTap = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/api/users/game/tap',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setPoints(response.data.points);
      setGamePoints(response.data.gamePoints);
    } catch (err) {
      setError('خطا در ثبت امتیاز');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    points,
    gamePoints,
    isLoading,
    error,
    handleTap
  };
}