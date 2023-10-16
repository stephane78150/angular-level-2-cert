import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiBaseService } from "./api-base.service";
import { NEVER, Observable, combineLatest } from "rxjs";
import { TeamResult } from "../app.model";

@Injectable()
export class TeamService extends ApiBaseService {

   constructor(private http: HttpClient) {
    super();
   }


}