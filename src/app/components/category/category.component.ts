import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Models/Category';
import { CollectionData } from 'src/DTO/collection-data';
import { CategoryService } from 'src/Services/Category/category.service';
import { ObjectIDName } from 'src/DTO/object-idname';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private Service:CategoryService) { }

    //#region Declaration Section
    Categories : CollectionData<Category> = new CollectionData<Category>();

    //#endregion

    //#region Init Method Section

    ngOnInit(): void {

      //#region Init Values
      this.Categories.DataList = [];
      this.Categories.Url = "";
      //#endregion

      //#region Call Methods
      this.getCategory();
      //#endregion

    }
    //#endregion

    //#region Get Categories
    getCategory()
        {
          let Categories = this.Service.GetCategories().subscribe(
            (data)=>
            {
              this.Categories.DataList = data.DataList;
              this.Categories.Url = data.Url;
            },
            (err)=>{ }
          );
        }
    //#endregion

}
