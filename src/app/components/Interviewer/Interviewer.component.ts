import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { InterViewer } from 'src/Models/InterViewer';
import { InterviewerService } from 'src/Services/Interviewer/Interviewer.service';

@Component({
  selector: 'app-Interviewer',
  templateUrl: './Interviewer.component.html',
  styleUrls: ['./Interviewer.component.css']
})
export class InterviewerComponent implements OnInit {

  constructor(private Service:InterviewerService) { }

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
      this.getInterviewers();
      //#endregion

    }
    //#endregion

    //#region Get Interviewers
    getInterviewers()
        {
          let Categories = this.Service.GetInterviewer().subscribe(
            (data)=>
            {
              this.Interviewers.DataList = data.DataList;
              this.Interviewers.Url = data.Url;
            },
            (err)=>{ }
          );
        }
    //#endregion

}
