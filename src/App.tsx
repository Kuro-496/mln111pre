import { useState } from 'react';
import Menu from './components/Menu';
import Game from './components/Game';
import Petals from './components/Petals';
import './index.css';

function App() {
  const [view, setView] = useState<'menu' | 'game'>('menu');
  const [scenarioId, setScenarioId] = useState<number>(0);

  const startGame = (id: number) => {
    setScenarioId(id);
    setView('game');
  };

  const goMenu = () => {
    setView('menu');
  };

  return (
    <>
      <Petals />
      {view === 'menu' ? (
        <Menu onStartGame={startGame} />
      ) : (
        <Game scenarioId={scenarioId} onBack={goMenu} />
      )}
    </>
  );
}

export default App;