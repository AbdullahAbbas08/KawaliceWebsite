import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Models/Category';
import { CollectionData } from 'src/DTO/collection-data';
import { CategoryService } from 'src/Services/Category/category.service';
import { ObjectIDName } from 'src/DTO/object-idname';
import { ActivatedRoute, Router } from '@angular/router';
import { Program } from 'src/Models/Program';
import { ProgramService } from 'src/Services/program/Program.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private Service:CategoryService ,private _ProgramService:ProgramService, private route: ActivatedRoute , private router:Router) { }

    //#region Declaration Section
    Categories : CollectionData<Category> = new CollectionData<Category>();
    Programs : CollectionData<Program> = new CollectionData<Program>();
    categoryID:number;
    //#endregion

    //#region Init Method Section

    ngOnInit(): void {

      //#region Init Values
      this.Categories.DataList = [];
      this.Categories.Url = "";
      //#endregion

      //#region Call Methods
      this.getCategory();
      this.GetPrograms();
      //#endregion
      window.scrollTo(0, 0)
    }
    //#endregion

    //#region Get Categories
    getCategory()
        {
          // let Categories = this.Service.GetCategories().subscribe(
          //   (data)=>
          //   {
          //     this.Categories.DataList = data.DataList;
          //     this.Categories.Url = data.Url;
          //   },
          //   (err)=>{ }
          // );

          //CategoryResolver
          this.Categories = this.route.snapshot.data['categories']
        }
    //#endregion

  //#region Get Programs
  GetPrograms()
  {
       this._ProgramService.GetPrograms().subscribe(
            (data)=>
            {
              this.Programs.DataList = data.DataList;
            },
            (err)=>{ }
          );
  }
//#endregion

  //#region Set Variables in Service
  // SetCategories(ID:number)
  // {
  //   this.Service.categoryID = ID;
  // }
  //#endregion



  }
