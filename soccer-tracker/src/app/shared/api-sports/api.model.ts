import { TeamSummary } from "src/app/team-results/team.model";

export type ApiTeam = {
    id: number;
    name: string;
    country: string;
    logo: string;
};
  
  
export type ApiVenue = {
    id: number;
    name: string;
}  
export type ApiLeagueDescription = Readonly<{
    id: number;
    name: string;
    country: string;
    logo: string;
}>

export type ApiLeagueDescriptionWithStandings = ApiLeagueDescription & Readonly<{
    standings: ReadonlyArray<ReadonlyArray<ApiTeamStanding>>
}>;
  
export type ApiLeague = Readonly<{
    league: ApiLeagueDescriptionWithStandings    
}>;


export type ApiTeamStanding = Readonly<{
    rank: number;
    team: ApiTeamSummary;    
    points: number;
    goalsDiff: number;
    all: ApiGameStats;
    home: ApiGameStats;
    away: ApiGameStats;
}>;

export type ApiTeamSummary = Readonly<{
    id: number;
    name: string;
    logo: string;
}>

export type ApiGameStats = Readonly<{
    played: number;
    win: number;
    draw: number;
    lose: number;
}>

export type ApiFixtureDescription = Readonly<{
    fixture: any;
    league: ApiLeagueDescription;
    teams: {
        home: ApiTeamSummary,
        away: ApiTeamSummary,
    };
    goals: {
        home: number;
        away: number;
    };
    score: any;
}>
  
export type ApiPaging = Readonly<{
    current: number;
    total: number;
}>
  
export type ApiParameters = Readonly<Record<string, string>>
  
export type ApiError = any; // error type is not used yet anyway
  
export type ApiResponse<T> = Readonly<{
    paging: ApiPaging;
    errors: ReadonlyArray<ApiError>;
    parameters: ApiParameters;
    response: ReadonlyArray<T>
}>;