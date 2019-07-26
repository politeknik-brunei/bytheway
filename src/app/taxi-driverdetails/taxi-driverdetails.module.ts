import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaxiDriverdetailsPage } from './taxi-driverdetails.page';

const routes: Routes = [
  {
    path: '',
    component: TaxiDriverdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaxiDriverdetailsPage]
})
export class TaxiDriverdetailsPageModule {}
