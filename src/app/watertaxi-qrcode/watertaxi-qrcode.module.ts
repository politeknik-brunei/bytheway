import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatertaxiQrcodePage } from './watertaxi-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: WatertaxiQrcodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WatertaxiQrcodePage]
})
export class WatertaxiQrcodePageModule {}
