import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfrecerVehiculoPageRoutingModule } from './ofrecer-vehiculo-routing.module';

import { OfrecerVehiculoPage } from './ofrecer-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfrecerVehiculoPageRoutingModule
  ],
  declarations: [OfrecerVehiculoPage]
})
export class OfrecerVehiculoPageModule {}
