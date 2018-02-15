import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from "../../../../services/seo.service";
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less'],
  providers: [SeoService, NewsService]
})
export class NewsDetailComponent implements OnInit {

  srory_id;
  loading:boolean = false;
  newsDetailResult: Array<any> = [];
  constructor(
    private seo: SeoService,
    private _newsService: NewsService,
    private _router: Router,
    private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        if (params['srory_id']) {
          this.srory_id = params['srory_id'];
        }
      });
  }

  ngOnInit() {
    this.seo.generateTags({
      pageTitle: 'News Detail',
      keywords: 'Keywords: News Detail',
      title: 'News Detail Title', 
      description: 'News Detail page description', 
      image: 'https://auto.ndtv.com/media/svg/carandbike_logo.svg?v=1_1',
      slug: ''
    })
    this._getNewsDetail();
  }

  private _getNewsDetail()
  {
    this.loading = true;
    this._newsService.getNewsDetail(this.srory_id).subscribe(data => {
      console.log(data['response']);
      if (!data['response']['data']['news']['id']) {
        this._router.navigate(['news']);
      }
      this.newsDetailResult = data['response']['data']['news'] || '';
      this.loading = false;
    });
  }

}
