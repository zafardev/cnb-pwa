import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareListingComponent } from './components/compare-listing/compare-listing.component'
import { CompareDetailComponent } from './components/compare-detail/compare-detail.component'

const routes: Routes = [
  { path: '',
    component: CompareListingComponent,
  },
  { path: ':slug', component: CompareDetailComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }
