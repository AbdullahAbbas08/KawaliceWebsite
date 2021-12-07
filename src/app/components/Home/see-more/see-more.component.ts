import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Trending } from 'src/DTO/Trending';
import { SeeMoreService } from 'src/Services/seeMore/seeMore.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {

  seeMoreData:CollectionData<Trending>=new CollectionData<Trending>()

  constructor(private seemoreService:SeeMoreService) { }

  ngOnInit(): void {
    this.getTrending()
  }

  getTrending(){
    this.seemoreService.getall().subscribe((res)=>{
      this.seeMoreData=res
    },
    (err)=>{console.log(err)})
  }

}
