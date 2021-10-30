import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ISatellite } from "../models/ISatellite";
import { SatellitesService } from "./satellites.service";

@Injectable()
export class SatelliteResolver implements Resolve<ISatellite> {
    constructor(private satellitesService: SatellitesService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISatellite>  {
        let satelliteUrl =  route.paramMap.get("satelliteUrl");
        if (!satelliteUrl) {
            satelliteUrl = '';
        }
        return this.satellitesService.getSatelliteByUrl(satelliteUrl);
    }

}