import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Slider } from 'src/Models/Slider';
import { SliderService } from 'src/Services/Slider/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderData:CollectionData<Slider>=new CollectionData<Slider>()
  imageUrl:any=''
  slideOne:Slider=new Slider()
  slideTwo:Slider=new Slider()
  slideThree:Slider=new Slider()
  constructor(private slider:SliderService) {
    this.slideOne.SliderImagePath=''
    this.slideTwo.SliderImagePath=''
    this.slideThree.SliderImagePath=''
   }

  ngOnInit(): void {
    this.GetSlider()
  }


  GetSlider(){
    this.slider.getall().subscribe(
       (res)=>{
         this.imageUrl=res.Url,
         this.sliderData.Url=res.Url,
         this.sliderData.DataList=res.DataList
         this.slideOne=this.sliderData.DataList[0]
         this.slideTwo=this.sliderData.DataList[1]
         this.slideThree=this.sliderData.DataList[2]
         console.log(this.sliderData)
       },
       (err)=>{console.log(err)}
     )
   }
}
