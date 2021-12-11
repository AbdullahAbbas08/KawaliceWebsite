import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Models/Category';
import { CollectionData } from 'src/DTO/collection-data';
import { CategoryService } from 'src/Services/Category/category.service';
import { ObjectIDName } from 'src/DTO/object-idname';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private Service:CategoryService , private route: ActivatedRoute) { }

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

    //#region Set Variables in Service
    SetCategories(ID:number)
    {
      this.Service.categoryID = ID;
    }
    //#endregion

}
