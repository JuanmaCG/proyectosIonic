import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialPageRoutingModule } from './proyecto-routing.module';

import { ProyectoPage } from './proyecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialPageRoutingModule
  ],
  declarations: [ProyectoPage]
})
export class ProyectoPageModule {}
