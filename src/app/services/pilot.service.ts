import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PilotDto } from '../models/PilotDto';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private apiUrl = `${environment.apiUrl}/api/pilot/getAll`;
  
  constructor(private http: HttpClient) { }

  getPilots()
  {
    const headers = new HttpHeaders({'X-API-KEY': environment.apiKey});
    return this.http.get<PilotDto[]>(this.apiUrl, { headers });
  }
}
