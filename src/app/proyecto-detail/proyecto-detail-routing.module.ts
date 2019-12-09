import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectoDetailPage } from './proyecto-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectoDetailPageRoutingModule {}
