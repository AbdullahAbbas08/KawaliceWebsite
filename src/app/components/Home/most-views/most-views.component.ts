import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { MostViewed } from 'src/DTO/MostViewed';
import { MostViewedService } from './../../../../Services/MostViewed/most-viewed.service';

@Component({
  selector: 'app-most-views',
  templateUrl: './most-views.component.html',
  styleUrls: ['./most-views.component.css']
})
export class MostViewsComponent implements OnInit {

  mostViewed : CollectionData<MostViewed> = new CollectionData<MostViewed>();

  constructor(private mostViewedService:MostViewedService) { }

  ngOnInit(): void {
    this.getMostViewed()
  }
  getMostViewed(){
    this.mostViewedService.getall().subscribe((res)=>{
      this.mostViewed=res
    },
    (err)=>{console.log(err)})
  }

}
