import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FontawesomePageRoutingModule } from './fontawesome-routing.module';

import { FontawesomePage } from './fontawesome.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontawesomePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [FontawesomePage]
})
export class FontawesomePageModule {}
