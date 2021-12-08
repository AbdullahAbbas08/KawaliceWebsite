import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramType } from 'src/Models/ProgramType';
import { ProgramTypeService } from './../../../Services/ProgramType/program-type.service';

@Component({
  selector: 'app-program-type',
  templateUrl: './program-type.component.html',
  styleUrls: ['./program-type.component.css']
})
export class ProgramTypeComponent implements OnInit {

  constructor(private ProgramTypeService:ProgramTypeService) { }

    //#region Declaration Section
    programType : CollectionData<ProgramType> = new CollectionData<ProgramType>();

    //#endregion

    //#region Init Method Section

    ngOnInit(): void {

      //#region Init Values
      this.programType.DataList = [];
      this.programType.Url = "";
      //#endregion

      //#region Call Methods
      this.getProgramType();
      //#endregion
    }

    getProgramType(){
      let programTypes = this.ProgramTypeService.getall().subscribe(
        (data)=>
        {
          this.programType.DataList = data.DataList;
          this.programType.Url = data.Url;
        },
        (err)=>{ }
      );
    }


}
