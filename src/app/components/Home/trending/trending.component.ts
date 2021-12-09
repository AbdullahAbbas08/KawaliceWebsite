import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Trending } from 'src/DTO/Trending';
import { TrendingService } from 'src/Services/trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingData:CollectionData<Trending>=new CollectionData<Trending>()

  constructor(private trendingService:TrendingService) { }

  ngOnInit(): void {
    this.getTrending()
    
  }

  getTrending(){
    this.trendingService.getall().subscribe((res)=>{
      this.trendingData=res
    },
    (err)=>{console.log(err)})
  }
}
