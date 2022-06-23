import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontawesomePage } from './fontawesome.page';

const routes: Routes = [
  {
    path: '',
    component: FontawesomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FontawesomePageRoutingModule {}
