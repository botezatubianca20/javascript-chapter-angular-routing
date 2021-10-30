import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ISatellite } from '../models/ISatellite';

@Injectable({
  providedIn: 'root'
})
export class SatellitesService {

  constructor(private http : HttpClient) { }

  getAllSatellites():any {
    return this.http.get<ISatellite[]>("http://localhost:3000/api/satellites/getAll");
  }

  getSatelliteByUrl(satelliteUrl: string) {
    return this.http.get<ISatellite>(`http://localhost:3000/api/satellites/getSatelliteByUrl/${satelliteUrl}`);
  }
}
