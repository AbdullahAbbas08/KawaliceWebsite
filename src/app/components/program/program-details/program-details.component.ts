import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { Program } from 'src/Models/Program';
import { Season } from 'src/Models/Season';
import { ProgramService } from 'src/Services/program/Program.service';
import { SeasonService } from 'src/Services/Seasons/season.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {

  constructor(private Service:ProgramService ,private _SeasonService:SeasonService,private route:ActivatedRoute) { }

   //#region Declaration Section
   ProgramObject : ProgramModel = new ProgramModel();
   Programs : CollectionData<ProgramModel> = new CollectionData<ProgramModel>();
   Seasons : Season[] =[];
   categoryID:number=0;
   ProgramID:number=0;
   //#endregion
  
   //#region Init Methode
ngOnInit(): void {
  this.GetProgramById();
  this.GetSeasonsByProgramID();
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
       console.log( this.Seasons );     
     },
     (err)=>{ }
   );
 }
 //#endregion
}
