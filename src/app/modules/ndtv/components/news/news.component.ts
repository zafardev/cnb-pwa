import { Component, OnInit } from '@angular/core';
import { SeoService } from "../../../../services/seo.service";
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  providers: [SeoService, NewsService]
})
export class NewsComponent implements OnInit {

  filterQuery:string = '';
  pageNo:number = 1;
  loading:boolean = false;
  loadMoreLoading:boolean = false;
  newsResult:any = [];
  endResult:boolean = false;
  constructor(private seo: SeoService, private _newsService: NewsService) { }

  onScrollDown () {
    console.log('scrolled down!!');
    // add nex page items
    this.pageNo += 1;
    if (!this.endResult) {
      this.loadMoreLoading = true;
      this._getNews();
    }
  }

  ngOnInit() {
    this.seo.generateTags({
      pageTitle: 'News Listing',
      keywords: 'Keywords: News Listing',
      title: 'News Listing Title', 
      description: 'News Listing page description', 
      image: 'https://auto.ndtv.com/media/svg/carandbike_logo.svg?v=1_1',
      slug: ''
    })
    this._getNews();
  }

  private _getNews()
  {
    this.filterQuery = 'page=' + this.pageNo + '&sort=min_price';
    this.loading = true;
    this._newsService.getNewsListing(this.filterQuery).subscribe(data => {
      console.log(data['response']);
      if (this.pageNo < data['response']['max_page']) {
        this.newsResult = this.newsResult.concat(data['response']['articles']);
      } else {
        this.endResult = true;
      }
      this.loadMoreLoading = false;
      this.loading = false;
    });
  }

}
