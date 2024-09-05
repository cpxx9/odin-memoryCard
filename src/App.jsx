import './styles/App.css';

import { useState } from 'react';

import ScoreBoard from './components/ScoreBoard';
import MemoryCards from './components/MemoryCards';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);

  if (score > highscore) {
    setHighScore(score);
  }

  function handleSetScore() {
    const newScore = score + 1;
    setScore(newScore);
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <>
      <ScoreBoard score={score} highScore={highscore} />
      <MemoryCards />
    </>
  );
}

export default App;
