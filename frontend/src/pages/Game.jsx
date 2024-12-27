import TapGame from '../components/game/TapGame';

function Game() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-8 text-2xl font-bold text-center">بازی تپ</h1>
      <TapGame />
    </div>
  );
}

export default Game;