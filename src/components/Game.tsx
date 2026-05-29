import { useEffect, useRef, useState } from 'react';
import { SCENARIOS } from '../data';
import type { Node } from '../types';

interface GameProps {
  scenarioId: number;
  onBack: () => void;
}

export default function Game({ scenarioId, onBack }: GameProps) {
  const scenario = SCENARIOS[scenarioId] || SCENARIOS[0];
  
  const [bgImg, setBgImg] = useState(scenario.bg || 'bg-menu.png');
  const [progressStep, setProgressStep] = useState(1);
  const [phase, setPhase] = useState<'intro' | 'node' | 'outcome'>('intro');
  const [introIdx, setIntroIdx] = useState(0);
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [speaker, setSpeaker] = useState('');
  
  const typeIntervalRef = useRef<number | null>(null);
  const currentFullTextRef = useRef('');

  const typeText = (fullText: string) => {
    currentFullTextRef.current = fullText;
    setIsTyping(true);
    setDisplayedText(''); // Xóa màn hình ngay khi bắt đầu gõ
    
    if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);

    let currentStr = ''; // Dùng biến cục bộ để lưu chuỗi đang gõ
    let i = 0;
    
    typeIntervalRef.current = window.setInterval(() => {
      if (i < fullText.length) {
        currentStr += fullText[i]; // Cộng dồn từng chữ vào biến này
        setDisplayedText(currentStr); // Update trực tiếp chuỗi hoàn chỉnh lên UI
        i++;
      } else {
        clearInterval(typeIntervalRef.current!);
        setIsTyping(false);
      }
    }, 22);
  };

  const skipTyping = () => {
    if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    setDisplayedText(currentFullTextRef.current);
    setIsTyping(false);
  };

  const initScenario = () => {
    setProgressStep(1);
    setPhase('intro');
    setIntroIdx(0);
    setBgImg(scenario.bg || 'bg-menu.png');
    const firstIntro = scenario.intro[0];
    setSpeaker(firstIntro.speaker);
    if (firstIntro.bg) setBgImg(firstIntro.bg);
    typeText(firstIntro.text);
  };

  useEffect(() => {
    initScenario();
    return () => {
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    };
  }, [scenarioId]);

  const handleBoxClick = () => {
    if (isTyping) {
      skipTyping();
      return;
    }

    if (phase === 'intro') {
      const nextIdx = introIdx + 1;
      if (nextIdx < scenario.intro.length) {
        setIntroIdx(nextIdx);
        const nextIntro = scenario.intro[nextIdx];
        setSpeaker(nextIntro.speaker);
        if (nextIntro.bg) setBgImg(nextIntro.bg);
        typeText(nextIntro.text);
      } else {
        setPhase('node');
        setCurrentNode(scenario.story);
        setProgressStep(1);
        setSpeaker(scenario.story.speaker || '');
        if (scenario.story.bg) setBgImg(scenario.story.bg);
        typeText(scenario.story.text);
      }
    }
  };

  const handleChoice = (nextKey: string) => {
    const nextNode = scenario.nodes[nextKey];
    if (!nextNode) return;

    if (nextNode.terminal) {
      setPhase('outcome');
      setCurrentNode(nextNode);
      setProgressStep(3);
    } else {
      setPhase('node');
      setCurrentNode(nextNode);
      setProgressStep(2);
      setSpeaker(nextNode.speaker || '');
      if (nextNode.bg) setBgImg(nextNode.bg);
      typeText(nextNode.text);
    }
  };

  const renderDots = () => {
    return [0, 1, 2].map((i) => {
      let className = 'prog-dot';
      if (i < progressStep - 1) className += ' done';
      else if (i === progressStep - 1) className += ' current';
      return <div key={i} className={className}></div>;
    });
  };

  return (
    <>
      <div id="bg-img" style={{ backgroundImage: `url('${bgImg}')` }}></div>
      <div id="bg-overlay"></div>

      <div className="screen active" id="vn-screen">
        <div id="vn-header">
          <div id="vn-scenario-name">{scenario.title}</div>
          <button id="vn-back" onClick={onBack}>← MENU</button>
        </div>
        <div id="vn-progress">{renderDots()}</div>
        <div id="vn-chars"></div>

        {phase !== 'outcome' && (
          <>
            <div id="vn-box">
              <div id="vn-namebar"><div id="vn-speaker">{speaker}</div></div>
              <div id="vn-dialog-wrap" onClick={handleBoxClick}>
                <div id="vn-text">
                  {displayedText}
                  <span id="vn-cursor"></span>
                </div>
                {!isTyping && phase === 'intro' && (
                  <div id="vn-continue">▼ Nhấn để tiếp tục</div>
                )}
              </div>
            </div>

            {!isTyping && phase === 'node' && currentNode?.choices && (
              <div id="vn-choices" style={{ display: 'flex' }}>
                {currentNode.choices.map((c, i) => (
                  <button key={i} className="choice-btn anim-slide" onClick={() => handleChoice(c.next)}>
                    <span className="choice-label-pill">{c.label}</span>{c.text}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {phase === 'outcome' && currentNode && (
          <div id="vn-outcome" style={{ display: 'flex' }} className="anim-slide">
            <div>
              <div className={`outcome-badge out-${currentNode.type || 'warn'}`} id="out-badge">
                {currentNode.badge}
              </div>
              <div className="out-text" id="out-text">{currentNode.text}</div>
            </div>
            <div className="out-lesson" id="out-lesson">{currentNode.lesson}</div>
            <div className="outcome-actions">
              <button className="out-btn out-btn-main" onClick={initScenario}>🔄 Chơi lại tình huống</button>
              <button className="out-btn out-btn-sec" onClick={onBack}>← Chọn tình huống khác</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}