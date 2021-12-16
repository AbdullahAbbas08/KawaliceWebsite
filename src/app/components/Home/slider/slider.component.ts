import { Component, OnInit,HostListener  } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Slider } from 'src/Models/Slider';
import { SliderService } from 'src/Services/Slider/slider.service';
import { ActivatedRoute } from '@angular/router';

declare function myFun():any;

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
  slideFour:Slider=new Slider()
  slideFive:Slider=new Slider()
  slideSex:Slider=new Slider()
  constructor(private slider:SliderService,private route:ActivatedRoute) {
    this.slideOne.SliderImagePath=''
    this.slideTwo.SliderImagePath=''
    this.slideThree.SliderImagePath=''
    this.slideFour.SliderImagePath=''
    this.slideFive.SliderImagePath=''
    this.slideSex.SliderImagePath=''
   }

  ngOnInit(): void {
    this.GetSlider();
    myFun()
  }

  ngAfterViewInit() {
    myFun()
  }

  GetSlider(){
    // this.slider.getall().subscribe(
    //    (res)=>{
    //      this.imageUrl=res.Url,
    //      this.sliderData.Url=res.Url,
    //      this.sliderData.DataList=res.DataList
    //      this.slideOne=this.sliderData.DataList[0]
    //      this.slideTwo=this.sliderData.DataList[1]
    //      this.slideThree=this.sliderData.DataList[2]
    //      this.slideFour=this.sliderData.DataList[3]
    //      this.slideFive=this.sliderData.DataList[4]
    //      this.slideSex=this.sliderData.DataList[5]
    //    },
    //    (err)=>{console.log(err)}
    //  )
    this.sliderData=this.route.snapshot.data['slider']
   }
}
