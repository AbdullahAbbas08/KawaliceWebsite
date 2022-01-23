import { Component, Input, OnInit } from '@angular/core';
import { AdsService } from 'src/Services/ads/ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class ADsComponent implements OnInit {
  @Input() placementId: number;
  dataList;
  url;
  constructor(private adsService:AdsService) { }

  ngOnInit(): void {
    this.getAdsById(this.placementId)
  }

  getAdsById(id){
    this.adsService.getAdsByID(id).subscribe(res=>{
     this.url=res.Url;
     this.dataList=res.DataList[0];

    })
  }

}
