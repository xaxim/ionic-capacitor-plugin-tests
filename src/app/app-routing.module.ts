import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'notifications',
    loadChildren: () => import('./debug/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'fontawesome',
    loadChildren: () => import('./debug/fontawesome/fontawesome.module').then( m => m.FontawesomePageModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./debug/material/material.module').then( m => m.MaterialPageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./debug/barcode/barcode.module').then( m => m.BarcodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
