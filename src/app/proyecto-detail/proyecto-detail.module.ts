import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectoDetailPageRoutingModule } from './proyecto-detail-routing.module';

import { ProyectoDetailPage } from './proyecto-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectoDetailPageRoutingModule
  ],
  declarations: [ProyectoDetailPage]
})
export class ProyectoDetailPageModule {}
