import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaxiQrcodePage } from './taxi-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: TaxiQrcodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaxiQrcodePage]
})
export class TaxiQrcodePageModule {}
