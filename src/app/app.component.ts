import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import "rxjs/add/operator/filter";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  openOverlay:boolean = false;

  constructor(private router: Router, private swUpdate: SwUpdate) {
    if (environment.production) {
      //Check Service Worker update
      this.swUpdate.available.subscribe(event => {
        console.log('Update available: current version is', event.current, 'available version is', event.available);
        window.location.reload();
      });
      //After update version
      this.swUpdate.activated.subscribe(event => {
        console.log('Update activated: old version was', event.previous, 'new version is', event.current);
      });
    }

    //Track route change event
    router.events.filter(event => event instanceof NavigationStart)
      .subscribe(e => { 
          this.openOverlay = false;
    })
  }

  //side panel show/hide
  openNav()
  {
    this.openOverlay = true;
  }
  closeNav()
  {
    this.openOverlay = false;
  }
  getOverlayWidth() {
    if(this.openOverlay) {
      return "100%";
    } else {
      return "0%";
    }
  }
  //End side panel show/hide

  goToUrl(url:string = '')
  {
    window.location.href=url;
  }

}
