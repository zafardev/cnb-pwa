import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnbCoreModule } from '../cnb-core/cnb-core.module';
import { NewCarsRoutingModule } from './new-cars-routing.module';
import { NewCarsModelsComponent } from './new-cars-models/new-cars-models.component';

@NgModule({
  imports: [
    CommonModule,
    CnbCoreModule.forRoot(),
    NewCarsRoutingModule
  ],
  declarations: [NewCarsModelsComponent]
})
export class NewCarsModule { }
