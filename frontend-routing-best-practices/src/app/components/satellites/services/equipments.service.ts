import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEquipment } from '../models/IEquipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {

  constructor(private http : HttpClient) { }

  getAllEquipmentsBySatelliteUrl(satelliteUrl: string) {
    return this.http.get<IEquipment[]>(`http://localhost:3000/api/equipments/getAllBySatelliteUrl/${satelliteUrl}`);
  }

  getEquipmentById(equipmentId: string) {
    return this.http.get<IEquipment>(`http://localhost:3000/api/equipments/getById/${equipmentId}`);
  }
}
