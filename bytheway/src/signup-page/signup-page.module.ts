import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplashscreenPagePage } from './splashscreen-page.page';

const routes: Routes = [
  {
    path: '',
    component: SplashscreenPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SplashscreenPagePage]
})
export class SplashscreenPagePageModule {}
