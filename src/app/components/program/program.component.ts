import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Program } from 'src/Models/Program';
import { ProgramService } from 'src/Services/program/Program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor(private Service:ProgramService) { }


    //#region Declaration Section
    Programs : CollectionData<Program> = new CollectionData<Program>();

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

    }
    //#endregion

    //#region Get Interviewers
    GetPrograms()
        {
          let Programs = this.Service.GetPrograms().subscribe(
            (data)=>
            {
              this.Programs.DataList = data.DataList;
              this.Programs.Url = data.Url;
            },
            (err)=>{ }
          );
        }
    //#endregion

}
