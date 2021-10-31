import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { SatelliteComponent } from './components/satellite/satellite.component';
import { SatellitesListComponent } from './components/satellites-list/satellites-list.component';
import { EquipmentDetailsResolver } from './services/equipment-details.resolver';
import { EquipmentsResolver } from './services/equipments.resolver';
import { SatelliteResolver } from './services/satellite.resolver';


const routes: Routes = [
  {
    path: "",
    component: SatellitesListComponent
  },
  {
    path: ":satelliteUrl",
    component: SatelliteComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: {
      satellite: SatelliteResolver
    },
    children: [
      {
        path: "",
        component: EquipmentListComponent,
        resolve: {
          equipments: EquipmentsResolver
        }
      },
      {
        path: "equipments/:equipmentId",
        component: EquipmentComponent,
        resolve: {
          equipment: EquipmentDetailsResolver
        }
      }

    ],
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
  providers: [
    SatelliteResolver,
    EquipmentsResolver,
    EquipmentDetailsResolver,
    AuthGuard
  ]
})
export class SatellitesRoutingModule {



}
