import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareListingComponent } from './components/compare-listing/compare-listing.component';
import { CompareDetailComponent } from './components/compare-detail/compare-detail.component';
import { SearchCompareComponent } from '../../extensions/comp-wizard/components/search-compare/search-compare.component';
import { AddCompareComponent } from '../../extensions/comp-wizard/components/add-compare/add-compare.component';
import { ResultCompareComponent } from '../../extensions/comp-wizard/components/result-compare/result-compare.component';

@NgModule({
  imports: [
    CommonModule,
    CompareRoutingModule
  ],
  declarations: [
      CompareListingComponent,
      CompareDetailComponent,
      SearchCompareComponent,
      AddCompareComponent,
      ResultCompareComponent
    ]
})
export class CompareModule { }
