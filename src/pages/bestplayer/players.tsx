// src/App.tsx
// import { useState } from "react";
// import GameCard from "./components/gameCard";
// import Popup from "./bestPlayerPopup";
// import { games } from "../../data/data";
// import type { SportsRecordType } from "../../data/schema";
import { useLocation } from "react-router-dom";
//import "./players.scss"
import type { Sport, MatchType } from "./utils/bestPlayer";
import Table from "../../components/table/table";
import { useState } from "react";
import BestPlayerPopup from "./components/popUp/bestPlayerPopup";

export default function BestPlayers() {
  const location = useLocation();
  const game: Sport = location.state;
  const [selectedMatch, setSelectedMatch] = useState<MatchType | null>(null)

  return (
    <article className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#c7eae6]   p-3 mx-auto">

      {/*Dynamic Background Image*/}
      {
        game.image && (
          <div
            className="absolute inset-0 bg-cover bg-center z-0 blur-2xs opacity-90"
            style={{backgroundImage:`url(${game.image})`}}
          ></div>
        )
      }

      {/*Overlay*/}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-0"/>

        <div className="relative z-10">
          <h2 className="font-[Brave81] text-3xl font-bold mb-4 text-center text-black mt-5 tracking-widest">
            {game.title}
          </h2>
        
            <Table
              columns={["Date", "Teams", "Winner"]}
              rows={game.matches.map((match) => [match.date, `${match.team1}${match.team2.length > 0 ? ' vs ' + match.team2 : ''}`, match.winner])}
              onRowClick={(index) => setSelectedMatch(game.matches[index])}
            />
        
          {selectedMatch && (
            <BestPlayerPopup match={selectedMatch} onClose={() => setSelectedMatch(null)} />
          )}
        </div>
    </article>
  );
};




// const [selectedGame, setSelectedGame] = useState<SportsRecordType | null>(
//   null
// );

// const handleCloseModel = (): void => setSelectedGame(null);

// // Handler must accept SportsRecordType
// const handleCardClick = (game: SportsRecordType): void =>
//   setSelectedGame(game);

{/* <section id="players" className="adjust-top">
  <div className="content">
    <h2>Best Players</h2>
    <div className="game-cards grid gap-7 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-7">
      {games.map((game, index) => (
        <GameCard key={index} game={game} onClick={handleCardClick} />
      ))}

      {selectedGame && (
        <Popup game={selectedGame} onClose={handleCloseModel} />
      )}
    </div>
  </div>
</section> */}