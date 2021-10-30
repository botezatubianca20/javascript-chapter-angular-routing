import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IEquipment } from "../models/IEquipment";
import { EquipmentsService } from "./equipments.service";


@Injectable()
export class EquipmentsResolver implements Resolve<IEquipment[]> {
    constructor(private equipmentsService: EquipmentsService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEquipment[]>  {
        let satelliteUrl =  route.paramMap.get("satelliteUrl");
        if (!satelliteUrl) {
            satelliteUrl = '';
        }
        return this.equipmentsService.getAllEquipmentsBySatelliteUrl(satelliteUrl);
    }

}