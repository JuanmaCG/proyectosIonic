import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectoEditPageRoutingModule } from './proyecto-edit-routing.module';

import { ProyectoEditPage } from './proyecto-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    ProyectoEditPageRoutingModule
  ],
  declarations: [ProyectoEditPage]
})
export class ProyectoEditPageModule {}
