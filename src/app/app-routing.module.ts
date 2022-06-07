import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {path: 'detils',loadChildren: () => import('./pages/detils/detils.module').then( m => m.DetilsPageModule)},
  {path: 'detils/:id',loadChildren: () => import('./pages/detils/detils.module').then( m => m.DetilsPageModule)},
  {path: 'cities',loadChildren: () => import('./pages/cities/cities.module').then( m => m.CitiesPageModule)},
  {path: 'cities/:id',loadChildren: () => import('./pages/cities/cities.module').then( m => m.CitiesPageModule)}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
