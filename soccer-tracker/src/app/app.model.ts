import { Response } from "./api/api.utils";

export type SoccerCountry = 'england' | 'spain' | 'germany' | 'france' | 'italy';

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

export type TeamResultsResponse = Response<TeamResults>;

