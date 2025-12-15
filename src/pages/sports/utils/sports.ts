import { teams, games } from "../../../data/data";

interface SportsDataType {
    title: string;
    webp: string;
    image: string;
    scoreboard: {
        team: string;
        points: number;
        rank: number;
    }[]
}

export default function getSportsData(): SportsDataType[] {
    const sportsData: SportsDataType[] = [];

    games.forEach((game) => {
        const newSport: SportsDataType = {
            title: game.title,
            webp: game.webp,
            image: game.image,
            scoreboard: [],
        };

        teams.forEach((team) => {
            let totalPoints = 0;
            game.matches.forEach((match) => {
                if (match.winner === team.teamId) {
                    totalPoints += match.points || 0;
                }
            });

            newSport.scoreboard.push({
                team: team.name,
                points: totalPoints,
                rank: -1,
            });
        });

        newSport.scoreboard.sort((a, b) => b.points - a.points);

        let currentRank = 1;
        let lastPoints = -1;

        newSport.scoreboard.forEach((team, index) => {
            if (index === 0 || team.points < lastPoints) {
                team.rank = index + 1;
                currentRank = index + 1;
            } else {
                team.rank = currentRank;
            }
            lastPoints = team.points;
        });

        sportsData.push(newSport);
    });

    return sportsData;
}