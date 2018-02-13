import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta, private _title: Title) { }

  generateTags(config) {
    config = {
      pageTitle: 'CNB',
      keywords: 'CNB keywords', 
      title: 'CNB title', 
      description: 'CNB desc', 
      image: 'https://auto.ndtv.com/media/svg/carandbike_logo.svg?v=1_1',
      slug: '',
      ...config
    }

    this._title.setTitle(config.pageTitle);

    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ name: 'description', content: config.description });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@CarAndBike' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'CarAndBike' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://rendertron-pwa.firebaseapp.com/${config.slug}` });
  }

}
