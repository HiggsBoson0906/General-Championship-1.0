import { useNavigate } from "react-router-dom";
import GameCard from "./components/gameCard/gameCard";
import { getBestPlayers, type Sport } from "./utils/bestPlayer";

export default function BestBySports() {
  const data = getBestPlayers();
  const navigate = useNavigate();
  const handleCardClick = (game: Sport): void => {
    navigate(`/players/${game.sportId}`, { state: game });
  };
  return (
    <section>
      {/** Background */}
      <div className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#FFFFF0]">
        <div className="content">
          <h2 className="text-amber-950 text-4xl pt-4 md:pt-6 lg:pt-7 pl-8 pb-1 font-bold font-[Brave81] tracking-wide text-center">
            Best Players
          </h2>

          {/**Card Component Traversing */}
          <div className="grid gap-6 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
            {data.map((game, index) => (
              <GameCard key={index} game={game} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
