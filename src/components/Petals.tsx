import { useEffect, useState } from 'react';

export default function Petals() {
  const [petals, setPetals] = useState<{ id: number; left: number; top: number; dur: number; del: number; rot: number; scale: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * -15,
      dur: 5 + Math.random() * 8,
      del: Math.random() * 10,
      rot: Math.random() * 360,
      scale: 0.7 + Math.random() * 0.8,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div id="petals-container">
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.del}s`,
            transform: `rotate(${p.rot}deg) scale(${p.scale})`
          }}
        />
      ))}
    </div>
  );
}