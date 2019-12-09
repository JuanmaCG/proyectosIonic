import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectoCreatePage } from './proyecto-create.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectoCreatePageRoutingModule {}
