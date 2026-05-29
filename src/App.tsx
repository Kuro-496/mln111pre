import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Game from './components/Game';
import Petals from './components/Petals';
import './index.css';

function App() {
  // Hàm đọc URL lúc mới load trang (phòng khi bạn F5 lại trang lúc đang trong game)
  const getInitialView = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') !== null ? 'game' : 'menu';
  };

  const getInitialId = () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id') || '0', 10);
    return isNaN(id) ? 0 : id;
  };

  const [view, setView] = useState<'menu' | 'game'>(getInitialView());
  const [scenarioId, setScenarioId] = useState<number>(getInitialId());

  // Lắng nghe sự kiện khi người dùng bấm nút Back / Forward trên trình duyệt
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      
      if (id !== null) {
        setScenarioId(parseInt(id, 10));
        setView('game');
      } else {
        setView('menu');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Hàm chạy khi chọn kịch bản ở Menu
  const startGame = (id: number) => {
    setScenarioId(id);
    setView('game');
    // Đẩy một lịch sử mới vào trình duyệt kèm URL chứa id
    window.history.pushState({}, '', `?id=${id}`);
  };

  // Hàm chạy khi bấm nút "← MENU" trong game
  const goMenu = () => {
    setView('menu');
    // Dọn dẹp URL, bỏ cái ?id=... đi
    window.history.pushState({}, '', window.location.pathname);
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