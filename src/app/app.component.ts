import { Component } from '@angular/core';
import {Event, Router,NavigationStart,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KawalisApp';

  ShowLoaderIndecator = true;

  constructor(private router:Router) {
    this.router.events.subscribe( (routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.ShowLoaderIndecator = true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.ShowLoaderIndecator = false;
      }
    })
  }
}
