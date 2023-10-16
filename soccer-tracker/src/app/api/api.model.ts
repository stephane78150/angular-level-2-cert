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
  
export type ApiLeague = Readonly<{
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        standings: ReadonlyArray<ReadonlyArray<ApiTeamStanding>>
    }
}>

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