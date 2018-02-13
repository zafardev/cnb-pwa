import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

interface NewsData {
  data: any
}

interface NewsDetailData {
  data: any
}

@Injectable()
export class NewsService {

	private apiNewListingUrl = 'https://auto.ndtv.com/Native/Content/News/GetNews?';
	private apiNewsDetail = 'https://auto.ndtv.com/Native/Content/News/GetNewsDetail?id=';
  
  constructor(private http: HttpClient) {}

	//Get news listing
	public getNewsListing(filters:string = ''): Observable<NewsData> {
		let httpHeaders = new HttpHeaders()
			.set('x-app-api-key', 'carandbike_app_1')
			.set('x-app-api-secret', '3b36a010bde30e3411fe026870a29d8e');
		return this.http
		  .get(this.apiNewListingUrl + filters, {
			headers: httpHeaders
		  })
		  .catch(this._handleError);
	}

	//Get news details
	public getNewsDetail(story_id:string = ''): Observable<NewsDetailData> {
		let httpHeaders = new HttpHeaders()
			.set('x-app-api-key', 'carandbike_app_1')
			.set('x-app-api-secret', '3b36a010bde30e3411fe026870a29d8e');
		return this.http
		  .get(this.apiNewsDetail + story_id, {
			headers: httpHeaders
		  })
		  .catch(this._handleError);
	}


  private _handleError(err: HttpErrorResponse | any) {
		const errorMsg = err.message || 'Error: Unable to complete request.';
		if (err.message) {
		  console.log(errorMsg);
		}
		return Observable.throw(errorMsg);
	}

}
