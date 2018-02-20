import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnbCoreModule } from '../cnb-core/cnb-core.module';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NdtvRoutingModule } from './ndtv-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CnbCoreModule.forRoot(),
    NdtvRoutingModule
  ],
  declarations: [NewsComponent, NewsDetailComponent]
})
export class NdtvModule { }
