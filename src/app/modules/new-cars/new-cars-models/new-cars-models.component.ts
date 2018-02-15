import { Component, OnInit } from '@angular/core';
import { SeoService } from "../../../services/seo.service";
import { NewCarsModelsService } from '../services/new-cars-models.service'

@Component({
  selector: 'app-new-cars-models',
  providers: [NewCarsModelsService, SeoService],
  templateUrl: './new-cars-models.component.html',
  styleUrls: ['./new-cars-models.component.less']
})
export class NewCarsModelsComponent implements OnInit {
  filterQuery:string = '';
  pageNo:number = 1;
  loading:boolean = false;
  loadMoreLoading:boolean = false;
  newCarResult:any = [];
  endResult:boolean = false;
  constructor(private seo: SeoService, private _newCarService: NewCarsModelsService) { }

  onScrollDown () {
    console.log('scrolled down!!');
    // add nex page items
    this.pageNo += 1;
    if (!this.endResult) {
      this.loadMoreLoading = true;
      this._getCarModels();
    }
  }
  
  onUp() {
    console.log('scrolled up!');
    
  }

  ngOnInit() {
    //page=1&sort=min_price
    this.seo.generateTags({
      pageTitle: 'New Car Listing',
      keywords: 'Keywords: New Car Listing',
      title: 'New Car Listing Title', 
      description: 'New Car Listing page description', 
      image: 'https://auto.ndtv.com/media/svg/carandbike_logo.svg?v=1_1',
      slug: ''
    })
    this._getCarModels();
  }

  private _getCarModels()
  {
    this.filterQuery = 'page=' + this.pageNo + '&sort=min_price';
    this.loading = true;
    this._newCarService.getNewCarListing(this.filterQuery).subscribe(data => {
      console.log(data['response']);
      console.log(this.pageNo, data['response']['data']['max_page'])
      if (this.pageNo < data['response']['data']['max_page']) {
        this.newCarResult = this.newCarResult.concat(data['response']['data']['cars']);
      } else {
        console.log('End loading');
        this.endResult = true;
      }
      this.loadMoreLoading = false;
      this.loading = false;
      console.log(this.newCarResult);
    });
  }

}
