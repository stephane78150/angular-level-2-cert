
export type TeamSummary = Readonly<{
    id: number;
    name: string;
    logo: string;
}>;

export type SoccerMatch = Readonly<{
    homeTeam: TeamSummary;
    homeScore: number;
    awayTeam: TeamSummary;
    awayScore: number;
}>;

export type LastSoccerMatches = ReadonlyArray<SoccerMatch>;