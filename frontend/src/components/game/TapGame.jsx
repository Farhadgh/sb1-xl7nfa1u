import { useState } from 'react';
import { useTapGame } from '../../hooks/useTapGame';
import TapButton from './TapButton';
import GameStats from './GameStats';

function TapGame() {
  const { points, gamePoints, isLoading, error, handleTap } = useTapGame();

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <GameStats points={points} gamePoints={gamePoints} />
      <TapButton onTap={handleTap} disabled={isLoading} />
    </div>
  );
}

export default TapGame;