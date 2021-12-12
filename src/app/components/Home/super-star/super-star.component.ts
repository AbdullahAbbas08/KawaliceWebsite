import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { InterviewerService } from 'src/Services/Interviewer/Interviewer.service';
import { SuperStar } from './../../../../Models/SuperStar';

@Component({
  selector: 'app-super-star',
  templateUrl: './super-star.component.html',
  styleUrls: ['./super-star.component.css']
})
export class SuperStarComponent implements OnInit {
  superStar : CollectionData<SuperStar> = new CollectionData<SuperStar>();

  constructor(private interviewerService:InterviewerService) {
    this.superStar.DataList=[]
   }

  ngOnInit(): void {
    this.getSuperStar()
  }

  getSuperStar(){
    this.interviewerService.GetSuperStars().subscribe((res)=>{
      this.superStar=res
    },
    (err)=>{console.log(err)})
  }
}
