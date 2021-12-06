import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Recently } from 'src/DTO/Recently';
import { RecentlyService } from 'src/Services/Recently/recently.service';

@Component({
  selector: 'app-recently',
  templateUrl: './recently.component.html',
  styleUrls: ['./recently.component.css'],
})
export class RecentlyComponent implements OnInit {
  recently: CollectionData<Recently> ;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  imageFive: string;
  imageSex: string;

  constructor(private recentlyService: RecentlyService) {
    this.imageOne = '';
    this.imageTwo = '';
    this.imageThree = '';
    this.imageFour = '';
    this.imageFive = '';
    this.imageSex = '';
  }

  ngOnInit(): void {
    this.getRecently();
  }

  getRecently() {
    this.recentlyService.getall().subscribe(
      (res) => {
        this.recently = res as CollectionData<Recently>;
        this.imageOne = this.recently.DataList[0].EpisodeImg;
        this.imageTwo = this.recently.DataList[1].EpisodeImg;
        this.imageThree = this.recently.DataList[2].EpisodeImg;
        // this.imageFour = this.recently.DataList[3].EpisodeImg;
        // this.imageFive = this.recently.DataList[4].EpisodeImg;
        // this.imageSex = this.recently.DataList[5].EpisodeImg;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
