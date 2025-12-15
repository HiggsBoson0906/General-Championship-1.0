import { games } from "../../../data/data";
import { getTeamName } from "../../../data/operators";

export interface Sport {
  sportId: string;
  title: string;
  image: string;
  webp: string;
  matches: MatchType[];
}

export interface MatchType {
  date: string;
  team1: string;
  team2: string;
  winner: string;
  bestPlayers: {
    name: string;
    title: string;
    image: string;
  }[];
}


export function getBestPlayers(): Sport[] {
  const sports: Sport[] = [];

  for (const game of games) {
    const newSport: Sport = {
      sportId: game.sportId,
      title: game.title,
      image: game.image,
      webp: game.webp,
      matches: [],
    };

    for (const match of game.matches) {
      newSport.matches.push({
        date: match.date,
        team1: getTeamName(match.team1Id),
        team2: match?.team2Id && getTeamName(match.team2Id) || "",
        winner: getTeamName(match.winner),
        bestPlayers: match?.bestPlayers || [],
      });
    }

    sports.push(newSport);
  }

  return sports;
}
