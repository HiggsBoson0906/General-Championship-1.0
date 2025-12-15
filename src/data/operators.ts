import { teams } from "./data";
import type { MatchType, TeamId } from "./schema";

// Helper function to get team name from ID
export function getTeamName(teamId: TeamId): string {
  // ASSUMPTION: 'teams' is correctly typed as TeamType[] in the data file
  const team = teams.find((t) => t.teamId === teamId);
  return team?.name ?? teamId;
}

export function validateWinner(match: MatchType): boolean {
  //CORRECTED: Added type guard function to correctly narrow the array type
  const teamIds = [match.team1Id, match.team2Id].filter(
    (id): id is TeamId => id !== undefined
  );
  return teamIds.includes(match.winner);
}
