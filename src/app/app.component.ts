import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  openOverlay:boolean = false;

  constructor(private router: Router) {
    //Track route change event
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationStart") {
        this.openOverlay = false;
      }
    });
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
}
