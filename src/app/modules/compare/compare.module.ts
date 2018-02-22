import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareListingComponent } from './components/compare-listing/compare-listing.component';
import { CompareDetailComponent } from './components/compare-detail/compare-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CompareRoutingModule
  ],
  declarations: [CompareListingComponent, CompareDetailComponent]
})
export class CompareModule { }
