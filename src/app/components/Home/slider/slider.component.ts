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
    this.sliderData=this.route.snapshot.data['slider']
   }
}
