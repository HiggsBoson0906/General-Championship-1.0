// src/components/RankDetailPopup.tsx
import React from "react";
import type { TeamRankedType } from "./utils/calculateRanking";

interface RankDetailPopupProps {
  team: TeamRankedType | null;
  onClose: () => void;
}

const RankDetailPopup: React.FC<RankDetailPopupProps> = ({ team, onClose }) => {
  if (!team) return null;

  return (
    // Modal Backdrop
    <div
      className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose} // Close on backdrop click
    >
      {/* Modal Content */}
      <div
        className="relative 
        bg-[url('/assets/tableImage/GCtable.png')]
        bg-cover bg-center bg-no-repeat
        md:max-w-xl     /* Tablet/Desktop: Increases max width to 'xl' */
        lg:max-w-2xl    /* Large Desktop: Sets max width to '2xl' */
       mb-10 bg-gradient-to-br from-white to-[#f4f1f0] p-6 rounded-2xl shadow-2xl w-full max-w-lg mx-1 transform scale-95 animate-popOpen hover:scale-100 transition-transform duration-300 ease-out mt-40"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* 🔹 Blurred Background Image Layer */}
        <div className="absolute inset-0 bg-[url('/assets/tableImage/GCtable.png')] bg-cover bg-center filter blur-xs"></div>

        {/* Header */}
        <div className="relative z-10">
        <div className="flex justify-between items-center mb-5 border-b-2 border-[#562909] pb-3">
          <h3 className="font-[Brave81] text-3xl font-extrabold text-[#562909] tracking-wider break-words whitespace-normal max-w-[290px]">
            {team.teamName} Details
          </h3>

          {/**Close  */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-2xl font-bold transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        {/* Overall Stats */}
        <p className="text-xl mb-5 text-gray-800 font-medium">
          <span className="font-bold text-[#8a420e]">
            Overall Rank: #{team.rank}
          </span>{" "}
          |
          <span className="ml-2 font-bold text-xl text-[#8a420e]">
            Total Points: {team.overallPoints}
          </span>
        </p>

        {/* Points by Sport */}
        <h4 className="text-xl font-semibold mb-4 text-[#352318] tracking-wide">
          Points Acquired by Sport:
        </h4>

        <ul className="space-y-3 max-h-72 overflow-y-auto pr-2">
          {team.distributedPoints.map((sport, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-[#f7ece4] to-white border border-[#8a420e] shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <span className="font-medium text-xl text-gray-800">
                {sport.sportName}
              </span>
              <span className="font-bold text-xl text-[#562909]">
                {sport.points} pts
              </span>
            </li>
          ))}
        </ul>

        {/* Footer or extra button (optional) 
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition-colors duration-200"
          >
            Close
          </button>
        </div>
        */}
      </div>
        </div>
    </div>
  );
};

export default RankDetailPopup;
