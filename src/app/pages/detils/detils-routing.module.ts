import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetilsPage } from './detils.page';

const routes: Routes = [
  {
    path: '',
    component: DetilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetilsPageRoutingModule {}
