import { Component, OnInit, NgModule } from '@angular/core';
import { SeoService } from "../../../../modules/cnb-core/services/seo.service";
import { HomeService } from "../../services/home.service";
import { HomeContent } from '../../../../models/HomeContent';
import { NgxCarousel } from 'ngx-carousel';



@Component({
  selector: 'home-contents',
  templateUrl: './home-contents.component.html',
  styleUrls: ['./home-contents.component.css'],
  providers: [HomeService, SeoService]
})
export class HomeContentsComponent implements OnInit {
  imgags: string[];
  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NgxCarousel;

  featured: Array<any> = [];
  featuredNews: Array<any> = [];
  loading: boolean;
  bannerLoading:boolean;
  constructor(
    private homeService: HomeService,
    private seo: SeoService
  ) { }

  
  ngOnInit() {
    this.seo.generateTags({
      pageTitle: 'Home',
      keywords: 'Home keywords',
      title: 'Home Page Title', 
      description: 'Home page description', 
      image: 'https://auto.ndtv.com/media/svg/carandbike_logo.svg?v=1_1',
      slug: ''
    })
    this._getFeaturedData();
    this._getFeaturedNews();
    //carousel config
    this.carouselBannerItems = [
      'https://auto.ndtvimg.com/car-images/medium/jeep/compass/jeep-compass.jpg?v=19',
      'https://auto.ndtvimg.com/car-images/medium/mahindra/xuv500/mahindra-xuv500.jpg?v=31',
      'https://auto.ndtvimg.com/car-images/medium/mahindra/scorpio/mahindra-scorpio.jpg?v=42',
      'https://auto.ndtvimg.com/bike-images/medium/mahindra/gusto/mahindra-gusto.jpg?v=6'
    ];

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 4,
      speed: 500,
      interval: 5000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 37px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 9px 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      custom: 'banner',
      touch: true,
      loop: true,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };

    //this.carouselBannerLoad();

  }

  public carouselBannerLoad() {
    console.log('carouselBannerLoad')
  }

  private _getFeaturedData() {
    this.loading = true;
    this.homeService.getHomeContents('exclusive_shop').subscribe(data => {
      this.featured = data['response']['data'] || [],
      this.loading = false;
      console.log(this.featured);
    });
  }

  private _getFeaturedNews()
  {
    this.bannerLoading = true;
    this.homeService.getHomeContents('featured_news').subscribe(data => {
      this.featuredNews = data['response']['data'] || [],
      this.bannerLoading = false;
      console.log(this.featuredNews);
    });
  }


}


