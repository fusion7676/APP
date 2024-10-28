import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfrecerVehiculoPage } from './ofrecer-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: OfrecerVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfrecerVehiculoPageRoutingModule {}
