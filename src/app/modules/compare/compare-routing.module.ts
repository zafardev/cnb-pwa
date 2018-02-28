import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareListingComponent } from './components/compare-listing/compare-listing.component'
import { CompareDetailComponent } from './components/compare-detail/compare-detail.component';
import { SearchCompareComponent } from '../../extensions/comp-wizard/components/search-compare/search-compare.component';
import { AddCompareComponent } from '../../extensions/comp-wizard/components/add-compare/add-compare.component';
import { ResultCompareComponent } from '../../extensions/comp-wizard/components/result-compare/result-compare.component';

const routes: Routes = [
  { path: '',
    component: CompareListingComponent,
  },
  { path: 'search',
    component: SearchCompareComponent,
  },
  { path: 'add',
    component: AddCompareComponent,
  },
  { path: 'result',
    component: ResultCompareComponent,
  },
  { path: ':slug', component: CompareDetailComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }
