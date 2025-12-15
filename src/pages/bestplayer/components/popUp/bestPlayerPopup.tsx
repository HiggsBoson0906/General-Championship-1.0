import { type MatchType } from "../../utils/bestPlayer";

interface BestPlayerPopupProps {
  match?: MatchType;
  onClose: () => void;
  onPlayerClick?: (playerName: string) => void; // optional handler for row click
}

export default function BestPlayerPopup({
  match,
  onClose,
  onPlayerClick,
}: BestPlayerPopupProps) {
  if (!match) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/10 backdrop-blur-sm p-2"
      onClick={onClose} // close when clicking backdrop
    >
      {/* Popup container */}
      <div
        className="relative w-full max-w-5xl bg-stone-800 border border-amber-200 rounded-2xl shadow-2xl shadow-amber-500/20 p-6 mt-20 max-h-[80vh] overflow-y-auto animate-popOpen"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside popup
        style={{ animation: "popOpen 0.3s ease-out forwards" }}
      >
        {/* Header */}
        {/* Header: Now a flex container */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-600">
          {/* Empty div for spacing - pushes the title to the center */}
          <div className="w-10"></div>{" "}
          {/* Adjust width to match button space */}
          {/* Title */}
          <h3 className="text-3xl font-bold text-center text-white font-[Brave81]">
            Match MVPs
          </h3>
          {/* Button */}
          <button
            onClick={onClose}
            className="w-10 text-4xl font-semibold text-stone-400 transition-colors duration-200 rounded-full hover:bg-stone-700 hover:text-white"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* MVP Players */}
        {match.bestPlayers && match.bestPlayers.length > 0 ? (
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
            {match.bestPlayers.map((player) => (
              <div
                key={player.name}
                onClick={() => onPlayerClick?.(player.name)}
                className="flex flex-col items-center justify-between transition-transform duration-300 transform bg-stone-900/50 rounded-3xl group hover:-translate-y-2 p-4 shadow-md h-72 cursor-pointer"
              >
                <div className="w-38 h-38 overflow-hidden border-3 rounded-full shadow-lg border-amber-500/50 group-hover:border-amber-400">
                  <img
                    src={
                      player.image ||
                      `https://ui-avatars.com/api/?name=${player.name.replace(
                        " ",
                        "+"
                      )}&background=292524&color=e7e5e4&size=128` // stone-800 and stone-200 colors
                    }
                    alt={player.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <h4 className="text-2xl font-bold text-center text-white transition-colors group-hover:text-amber-300 tracking-wider">
                    {player.name}
                  </h4>
                  <p className="mt-1 text-2xl font-semibold tracking-widest text-center uppercase text-md text-amber-400">
                    {player.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-stone-400">
            No MVP data is available for this match.
          </p>
        )}
      </div>
    </div>
  );
}
