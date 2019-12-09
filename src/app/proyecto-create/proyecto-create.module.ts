import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectoCreatePageRoutingModule } from './proyecto-create-routing.module';

import { ProyectoCreatePage } from './proyecto-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProyectoCreatePageRoutingModule
  ],
  declarations: [ProyectoCreatePage]
})
export class ProyectoCreatePageModule {}
