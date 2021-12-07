import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { Program } from 'src/Models/Program';
import { ProgramService } from 'src/Services/program/Program.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {

  constructor(private Service:ProgramService ,private route:ActivatedRoute) { }

   //#region Declaration Section
   ProgramObject : Program = new Program();
   Programs : CollectionData<Program> = new CollectionData<Program>();
   categoryID:number=0;
   ProgramID:number=0;
   //#endregion
  
//#region Init Methode
ngOnInit(): void {
  this.GetProgramById();
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

}
