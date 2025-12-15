import { teams, games } from "../../../data/data";

// For the overall rank table
export interface TeamRankedType {
  rank: number;
  teamName: string;
  overallPoints: number;
  distributedPoints: {
    sportName: string;
    points: number;
  }[];
}

export function calculateRankings(): TeamRankedType[] {
  const ranking: TeamRankedType[] = [];

  // Calculate the overall points for each team
  teams.forEach((team) => {
    const teamId = team.teamId;
    const teamRanked: TeamRankedType = {
      rank: -1,
      teamName: team.name,
      overallPoints: 0,
      distributedPoints: [],
    };
    games.forEach((game) => {
      let totalGamePoints = 0;
      game.matches.forEach((match) => {
        if (match.winner === teamId) {
          totalGamePoints += match.points || 0;
        }
      });
      teamRanked.overallPoints += totalGamePoints;
      teamRanked.distributedPoints.push({
        sportName: game.title,
        points: totalGamePoints,
      });
    });
    ranking.push(teamRanked);
  });

  // Sort the teams by overall points
  ranking.sort((a, b) => b.overallPoints - a.overallPoints);

  // 🚨 CORRECTED: Assign ranks based on the sorted order, handling ties
  let currentRank = 1;
  let lastPoints = -1;

  ranking.forEach((teamRanked, index) => {
    if (index === 0 || teamRanked.overallPoints < lastPoints) {
      teamRanked.rank = index + 1;
      currentRank = index + 1;
    } else {
      // Points are equal to the previous team's score
      teamRanked.rank = currentRank;
    }
    lastPoints = teamRanked.overallPoints;
  });

  return ranking;
}
