import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forEach } from 'src/assets/fontawesome-free-5.15.4-web/js/v4-shims';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { Recently } from 'src/DTO/Recently';
import { Program } from 'src/Models/Program';
import { Season } from 'src/Models/Season';
import { CategoryService } from 'src/Services/Category/category.service';
import { EpisodeService } from 'src/Services/Episode/episode.service';
import { InterviewerService } from 'src/Services/Interviewer/Interviewer.service';
import { ProgramService } from 'src/Services/program/Program.service';
import { SeasonService } from 'src/Services/Seasons/season.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {

  constructor(private Service:ProgramService ,
              private _SeasonService:SeasonService,
              private _EpisodeService:EpisodeService,
              private interviewerService:InterviewerService,
              private route:ActivatedRoute , private _CategoryService:CategoryService) { 

                // this.GetProgramById();
                // this.GetSeasonsByProgramID();
                // this.route.queryParams.subscribe( (query)=>{ this.ProgramID = query['id']  })
                // this.GetEpisodebyProgramID(this.ProgramID);
              }

   //#region Declaration Section
   ProgramObject : ProgramModel = new ProgramModel();
   Programs : CollectionData<ProgramModel> = new CollectionData<ProgramModel>();
   Seasons : Recently[] =[];
   Episodes : Recently[] =[];
   EpisodeCollection : CollectionData<Recently> = new CollectionData<Recently>();
   categoryID:number=0;
   ProgramID:number=0;
   Url:String="";
   //#endregion
  
   //#region Init Methode
    ngOnInit(): void {
      this.EpisodeCollection.DataList = [];

      this.GetProgramById();
      this.GetSeasonsByProgramID();
      this.GetEpisodebyProgramID( Number(this.route.snapshot.paramMap.get('ProgramID')));
    }
//#endregion

  //#region Get Program By Id
 GetProgramById()
 {
       //#region  Filter Program By Category ID
       this.route.queryParams.subscribe( (query)=>{ this.ProgramID = query['id']  })
      //#endregion
  //  let Programs = this.Service.GetProgramById(this.ProgramID).subscribe(
  //    (data)=>
  //    {
  //      this.Programs.DataList = data.DataList;
  //      this.ProgramObject = this.Programs.DataList[0];
  //      this.Programs.Url = data.Url;
       
  //    },
  //    (err)=>{ }
  //  );

  this.Programs = this.route.snapshot.data['programDetail']
  this.ProgramObject = this.Programs.DataList[0];
  // console.log("program detail : ",this.Programs.DataList)
 }
 //#endregion

 //#region Get All Season Realted With This Program
 GetSeasonsByProgramID()
 {

    this.Seasons = this.route.snapshot.data['Seasons']

  //  let Seasons = this._SeasonService.GetSeasonsByProgramId(this.Service.ProgramID).subscribe(
  //    (data)=>
  //    {
  //      this.Seasons = data.DataList;
  //    },
  //    (err)=>{ }
  //  );

 }
 //#endregion


  //#region Get All Episode Realted With This Program
  GetEpisodebyProgramID(id:number)
  {
        //#region  Filter Program By Category ID
        //this.route.queryParams.subscribe( (query)=>{ this.ProgramID = query['id']  })
       //#endregion
    let Episodes = this._EpisodeService.GetEpisodebyProgramID(id).subscribe(
      (data)=>
      {
        this.EpisodeCollection = data; 
        this.Url = this.EpisodeCollection.Url;
      },
      (err)=>{ }
    );
  }
  //#endregion

  //#region Set Data Into Service
  // SetEpisode(ID:number)
  // {
  //   this._EpisodeService.EpisodeID = ID;
  // }
  // SetInterviewer(ID:number)
  // {
  //   this.interviewerService.InterviewerID = ID;
  // }
  SetSeason(ID:number)
  {
    this.Service.SeasonID = ID;
  }
  // SetCategories(ID:number)
  // {
  //   this._CategoryService.categoryID = ID;
  // }
  //#endregion

}
