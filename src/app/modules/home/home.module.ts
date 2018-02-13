import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnbCoreModule } from '../cnb-core/cnb-core.module';
import { NgxCarouselModule } from 'ngx-carousel';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContentsComponent } from './components/home-contents/home-contents.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';

@NgModule({
  imports: [
    CommonModule,
    CnbCoreModule.forRoot(),
    NgxCarouselModule,
    HomeRoutingModule
  ],
  declarations: [HomeContentsComponent, CommingSoonComponent]
})
export class HomeModule { }
