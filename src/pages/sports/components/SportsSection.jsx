import React from "react";
import GameCard from "./gameCard/gameCard.tsx";   // Imports GameCard.tsx
import { getBestPlayers } from "../utils/bestPlayer.ts";
import TargetCursor from "../../../components/cursor/targetcursor";
function SportsSection({ handleSportClick }) {
  const data = getBestPlayers();
  return (
    // <div>
    //   <TargetCursor
    //     spinDuration={2}
    //     hideDefaultCursor={true}
    //     parallaxOn={true}
    //   />
    <div className="grid gap-6 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
      {data.map((game, index) => (
        <GameCard className='cursor-target' key={index} game={game} onClick={handleSportClick} />
      ))}
      </div>
    // </div>
  );
}

export default SportsSection;