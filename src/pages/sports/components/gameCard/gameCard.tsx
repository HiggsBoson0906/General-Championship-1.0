// src/components/GameCard.tsx

import React from "react";
import type { Sport } from "../../utils/bestPlayer";

interface GameCardProps {
  game: Sport;
  onClick: (game: Sport) => void;
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick, className }) => {
  // Destructuring is safe now, as SportsRecordType extends SportType
  const { title, webp, image } = game;
  const jpg = image;

  return (
    <div className="sport-card relative bg-white rounded-3xl shadow-lg shadow-teal-950/70 overflow-hidden "
    onClick={() => onClick(game)}>
  {/* Image Layer (Animated) */}
  <div className={`relative w-full h-50 overflow-hidden animate-scalePulse lg:animate-none lg:hover:scale-105 ${className}`}>
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={jpg} type="image/jpeg" />
      <img src={jpg} alt={title} className="w-full h-full object-cover" />
      <img
        src={jpg}
        alt={title}
        className="absolute bottom-0 left-0 w-full h-10 blur"
      />
    </picture>
  </div>

  {/* Text Layer (Stable, not scaled) */}
  <div className="absolute bottom-0 left-5 z-10">
    <h2
      className="font-brave81 text-xl font-semibold text-white mb-2 tracking-widest"
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      {title}
    </h2>
  </div>
</div>

  );
};

export default GameCard;
