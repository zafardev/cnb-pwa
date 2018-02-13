import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { UtilsService } from './services/utils.service';
import { SeoService } from './services/seo.service';
import { LoadingComponent } from './components/loading.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule,
    LazyLoadImagesModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule,
    LazyLoadImagesModule,
    LoadingComponent
  ],
  declarations: [LoadingComponent]
})

export class CnbCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CnbCoreModule,
      providers: [UtilsService, SeoService]
    };
  }
}
