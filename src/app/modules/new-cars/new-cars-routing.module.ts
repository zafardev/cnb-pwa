import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCarsModelsComponent } from './new-cars-models/new-cars-models.component';

const routes: Routes = [
  {
    path: '',
    component: NewCarsModelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCarsRoutingModule { }
