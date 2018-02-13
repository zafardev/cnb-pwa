import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/home/home.module#HomeModule'
  },
  {
    path: 'new-cars',
    loadChildren: 'app/modules/new-cars/new-cars.module#NewCarsModule'
  },
  {
    path: 'news',
    loadChildren: 'app/modules/ndtv/ndtv.module#NdtvModule'
  },
  {path: '**', redirectTo: 'news'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
