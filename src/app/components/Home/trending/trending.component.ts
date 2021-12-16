import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Trending } from 'src/DTO/Trending';
import { TrendingService } from 'src/Services/trending.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingData:CollectionData<Trending>=new CollectionData<Trending>()

  constructor(private trendingService:TrendingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTrending()

  }

  getTrending(){
    this.trendingData= this.route.snapshot.data['trending']
  }
}
