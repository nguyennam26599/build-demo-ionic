import { TranslateRouting } from './translate.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateComponent } from './translate/translate.component';
import { Autoresize } from './translate/autosize';

@NgModule({
  declarations: [
    TranslateComponent,
    Autoresize
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TranslateRouting)
  ],
  exports: [IonicModule, TranslateComponent, Autoresize]
})
export class TranslateModule { }
