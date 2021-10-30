import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IEquipment } from "../models/IEquipment";
import { EquipmentsService } from "./equipments.service";


@Injectable()
export class EquipmentDetailsResolver implements Resolve<IEquipment> {
    constructor(private equipmentsService: EquipmentsService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEquipment>  {
        let equipmentId =  route.paramMap.get("equipmentId");
        if (!equipmentId) {
            equipmentId = '';
        }
        return this.equipmentsService.getEquipmentById(equipmentId);
    }

}