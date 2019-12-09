import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectoEditPage } from './proyecto-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectoEditPageRoutingModule {}
