import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StrategyDto } from '../models/StrategyDto';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  private apiUrl = `${environment.apiUrl}/api/strategy/optimal`;
    
    constructor(private http: HttpClient) { }
  
    getOptimalStrategies(maxLaps: number, pilotId: number)
    {
      const headers = new HttpHeaders({'X-API-KEY': environment.apiKey});
      return this.http.get<StrategyDto[]>(`${this.apiUrl}?maxLaps=${maxLaps}&pilotId=${pilotId}`, { headers });
    }
}
