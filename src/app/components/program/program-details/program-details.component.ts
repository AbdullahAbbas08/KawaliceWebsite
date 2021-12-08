import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { Recently } from 'src/DTO/Recently';
import { Program } from 'src/Models/Program';
import { Season } from 'src/Models/Season';
import { EpisodeService } from 'src/Services/Episode/episode.service';
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
              private route:ActivatedRoute) { }

   //#region Declaration Section
   ProgramObject : ProgramModel = new ProgramModel();
   Programs : CollectionData<ProgramModel> = new CollectionData<ProgramModel>();
   Seasons : Season[] =[];
   Episodes : Recently[] =[];
   EpisodeCollection : CollectionData<Recently> = new CollectionData<Recently>();
   categoryID:number=0;
   ProgramID:number=0;
   Url:String="";
   //#endregion
  
   //#region Init Methode
    ngOnInit(): void {
      this.GetProgramById();
      this.GetSeasonsByProgramID();
      this.route.queryParams.subscribe( (query)=>{ this.ProgramID = query['id']  })
      this.GetEpisodebyProgramID(this.ProgramID);
    }

//#endregion

  //#region Get Program By Id
 GetProgramById()
 {
       //#region  Filter Program By Category ID
       this.route.queryParams.subscribe( (query)=>{ this.ProgramID = query['id']  })
      //#endregion
   let Programs = this.Service.GetProgramById(this.ProgramID).subscribe(
     (data)=>
     {
       this.Programs.DataList = data.DataList;
       this.ProgramObject = this.Programs.DataList[0];
       this.Programs.Url = data.Url;
       
     },
     (err)=>{ }
   );
 }
 //#endregion

 //#region Get All Season Realted With This Program
 GetSeasonsByProgramID()
 {
       //#region  Filter Program By Category ID
       //this.route.queryParams.subscribe( (query)=>{ this.ProgramID = query['id']  })
      //#endregion
   let Seasons = this._SeasonService.GetSeasonsByProgramId(45).subscribe(
     (data)=>
     {
       this.Seasons = data;
     },
     (err)=>{ }
   );
 }
 //#endregion

  //#region Get All Season Realted With This Program
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
        console.log(this.EpisodeCollection.DataList)
      },
      (err)=>{ }
    );
  }
  //#endregion
}
