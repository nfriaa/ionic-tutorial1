import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Exemple1Page } from './exemple1';

@NgModule({
  declarations: [
    Exemple1Page,
  ],
  imports: [
    IonicPageModule.forChild(Exemple1Page),
  ],
})
export class Exemple1PageModule {}
