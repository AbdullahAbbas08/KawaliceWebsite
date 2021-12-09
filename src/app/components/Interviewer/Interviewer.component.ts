import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { InterViewer } from 'src/Models/InterViewer';
import { InterviewerService } from 'src/Services/Interviewer/Interviewer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Interviewer',
  templateUrl: './Interviewer.component.html',
  styleUrls: ['./Interviewer.component.css']
})
export class InterviewerComponent implements OnInit {

  constructor(private Service:InterviewerService,private route:ActivatedRoute) { }

    //#region Declaration Section
    Interviewers : CollectionData<InterViewer> = new CollectionData<InterViewer>();

    //#endregion

    //#region Init Method Section

    ngOnInit(): void {

      //#region Init Values
      this.Interviewers.DataList = [];
      this.Interviewers.Url = "";
      //#endregion

      //#region Call Methods
      this.Interviewers= this.route.snapshot.data['interviewer']
      //#endregion

      window.scrollTo(0, 0)
    }
    //#endregion

    //#region Get Interviewers

    //#endregion

}
