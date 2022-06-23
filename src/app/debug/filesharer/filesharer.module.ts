import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilesharerPageRoutingModule } from './filesharer-routing.module';

import { FilesharerPage } from './filesharer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilesharerPageRoutingModule
  ],
  declarations: [FilesharerPage]
})
export class FilesharerPageModule {}
