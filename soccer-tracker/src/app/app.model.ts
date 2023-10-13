export type SoccerCountry = 'england' | 'spain' | 'germany' | 'france' | 'italy';

export type SoccerTopLeague = 'Premier League' | 'La Liga' | 'Ligue 1' | 'Bundesliga' | 'Serie A';

export type TeamResult = {
    teamName: string;
    games: number;
    wins: number;
    losses: number;
    draws: number;
    goalDifference: number;
    points: number;
}

