import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramType } from 'src/Models/ProgramType';
import { ProgramTypeService } from './../../../Services/ProgramType/program-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-type',
  templateUrl: './program-type.component.html',
  styleUrls: ['./program-type.component.css']
})
export class ProgramTypeComponent implements OnInit {

  constructor(private ProgramTypeService:ProgramTypeService,private route:ActivatedRoute) { }

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
      this.programType=this.route.snapshot.data['programType']
      //#endregion
    }

}
