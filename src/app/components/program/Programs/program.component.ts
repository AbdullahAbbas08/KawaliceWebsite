import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { Program } from 'src/Models/Program';
import { ProgramService } from 'src/Services/program/Program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor(private Service:ProgramService ,private route:ActivatedRoute) { }


    //#region Declaration Section
    Programs : CollectionData<Program> = new CollectionData<Program>();
    categoryID:number;
    //#endregion

    //#region Init Method Section

    ngOnInit(): void {

      //#region Init Values
      this.Programs.DataList = [];
      this.Programs.Url = "";
      //#endregion

      //#region Call Methods
       this.GetPrograms();
      //#endregion

      //#region  Filter Program By Category ID
      // const routeParams = this.route.snapshot.paramMap;
      // const productIdFromRoute = Number(routeParams.get('id'));
      // console.log("productIdFromRoute : ",productIdFromRoute);
      //     this.Service.GetProgramsByCatId(productIdFromRoute).subscribe(
      //       (data)=>{
      //         this.Programs.DataList = data.DataList;
      //         this.Programs.Url = data.Url;
      //         // console.log( this.Programs.DataList);
      //       }
      //     )
      //#endregion
      
     
    }
    //#endregion

    //#region Get Programs
    GetPrograms()
        {
          this.Programs = this.route.snapshot.data['programs']
        }
    //#endregion

    //#region  Set Program ID
    // SetProgramID(ID:number)
    // {
    //   this.Service.ProgramID = ID
    // }
    //#endregion
}
