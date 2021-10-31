import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';
import { CustomPreloadingStrategy } from './services/custom-preloading.strategy';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  },
  {
    path: "admin",
    loadChildren: () => import('./components/admin/admin.module').then(module => module.AdminModule),
    canActivate: [AdminGuard],
    data: {
      preload: false
    }
  },
  {
    path: "satellites",
    loadChildren: () => import('./components/satellites/satellites.module').then(module => module.SatellitesModule),
    // canLoad: [CanLoadAuthGuard],
    // canActivate: [AuthGuard],
    data: {
      preload: true
    }
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule],
  providers: [
    CanLoadAuthGuard,
    AuthGuard,
    AdminGuard,
    CustomPreloadingStrategy
  ]
})
export class AppRoutingModule { }
