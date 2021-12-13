import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { InterviewerProgfile } from 'src/DTO/Interviewer/interviewer-progfile';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { Recently } from 'src/DTO/Recently';
import { Program } from 'src/Models/Program';
import { Season } from 'src/Models/Season';
import { EpisodeService } from 'src/Services/Episode/episode.service';
import { InterviewerService } from 'src/Services/Interviewer/Interviewer.service';
import { ProgramService } from 'src/Services/program/Program.service';
import { SeasonService } from 'src/Services/Seasons/season.service';

@Component({
  selector: 'app-interviewer-detail',
  templateUrl: './interviewer-detail.component.html',
  styleUrls: ['./interviewer-detail.component.css']
})
export class InterviewerDetailComponent implements OnInit {

  constructor(private Service: InterviewerService,
    private _EpisodeService: EpisodeService,
    private _ProgramService: ProgramService,
    private route: ActivatedRoute) { }

  //#region Declaration Section
  InterviewerObject: InterviewerProgfile = new InterviewerProgfile();
  Episodes: Recently[] = [];
  EpisodeCollection: CollectionData<Recently> = new CollectionData<Recently>();
  Interviewers: CollectionData<InterviewerProgfile> = new CollectionData<InterviewerProgfile>();
  Programs: CollectionData<Program> = new CollectionData<Program>();
  Url: String = "";
  //#endregion

  //#region Init Methode
  ngOnInit(): void {

    //#region Call Methods
    this.FindInterviewer();
    this.GetProgramsByInterviewerId();
    //#endregion
  }
  //#endregion

  //#region Get Interviewer By Id
  FindInterviewer() {
    // this.route.queryParams.subscribe((query) => {
    //    this.Service.FindInterviewer( query['id']).subscribe(
    //     (data) => {
    //       this.Interviewers.DataList = data.DataList;
    //       this.InterviewerObject = this.Interviewers.DataList[0];
    //       console.log(this.InterviewerObject)
    //       this.Interviewers.Url = data.Url; },
    //     (err) => { }
    //   );}) 
    
    this.Interviewers = this.route.snapshot.data['interviewer'];
    this.InterviewerObject = this.Interviewers.DataList[0];

  }
  //#endregion


  //#region Get Programs by Interviewer 
  GetProgramsByInterviewerId() {
       this._ProgramService.GetProgramsByInterviewerId( Number(this.route.snapshot.paramMap.get('InterviewerID'))).subscribe(
        (data) => {
          this.Programs.DataList = data.DataList;
          this.Interviewers.Url = data.Url; },
        (err) => { }
      );}
  //#endregion


}
