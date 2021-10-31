import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { LoginComponent } from './components/login/login.component';
import { SatelliteComponent } from './components/satellite/satellite.component';
import { SatellitesListComponent } from './components/satellites-list/satellites-list.component';
import { AuthGuard } from './services/auth.guard';
import { EquipmentDetailsResolver } from './services/equipment-details.resolver';
import { EquipmentsResolver } from './services/equipments.resolver';
import { SatelliteResolver } from './services/satellite.resolver';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "satellites",
    component: SatellitesListComponent,
  },
  {
    path: "satellites/:satelliteUrl",
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

    ]
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    SatelliteResolver,
    EquipmentsResolver,
    EquipmentDetailsResolver,
    AuthGuard
  ]
})
export class AppRoutingModule { }
