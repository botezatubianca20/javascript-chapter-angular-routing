import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SatellitesListComponent } from './components/satellites-list/satellites-list.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { SatelliteComponent } from './components/satellite/satellite.component';
import {MatCardModule} from "@angular/material/card";
import { SatellitesRoutingModule } from './satellites-routing.module';





@NgModule({
  declarations: [
    SatellitesListComponent,
    EquipmentComponent,
    EquipmentListComponent,
    SatelliteComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SatellitesRoutingModule
  ]
})
export class SatellitesModule { }
