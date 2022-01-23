import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { Program } from 'src/Models/Program';
import { ProgramService } from 'src/Services/program/Program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor(private Service:ProgramService ,private route:ActivatedRoute,private router:Router) { }

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
       if(this.route.snapshot.paramMap.get('CategoryId') != undefined)
        this.Programs = this.route.snapshot.data['programs'];
      else  if(this.route.snapshot.queryParamMap.get('Type') != undefined)
        this.Programs = this.route.snapshot.data['programsByType'];
        else
       this.GetPrograms();
      //#endregion

    }
    //#endregion

    //#region Get Programs By Cat ID
    GetPrograms()
        {
          this.Programs = this.route.snapshot.data['Allprograms']
        }
    //#endregion

        //#region Get All Programs
        GetAllPrograms()
        {
          this.Programs = this.route.snapshot.data['programs']
        }
    //#endregion

}
