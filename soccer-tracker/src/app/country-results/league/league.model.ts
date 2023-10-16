
export type League = Readonly<{
    id: number;
    name: string;
}>

export type TeamResult = {
    teamId: number;
    teamName: string;
    teamLogo: string;
    games: number;
    wins: number;
    losses: number;
    draws: number;
    goalDifference: number;
    points: number;
}


export type TeamResults = ReadonlyArray<TeamResult>;
