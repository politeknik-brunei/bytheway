import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaxiSeatsPage } from './taxi-seats.page';

const routes: Routes = [
  {
    path: '',
    component: TaxiSeatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaxiSeatsPage]
})
export class TaxiSeatsPageModule {}
