import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { ObjectIDName } from 'src/DTO/object-idname';
import { environment } from 'src/environments/environment';
import { Category } from 'src/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

    //#region Options
    httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
    //#endregion

      //#region Categories API's

  GetCategories(): Observable<CollectionData<Category>> {
    return this.http.get<CollectionData<Category>>(`${environment.URL}/episodes/getallcategories`, this.httpOptionsWithKey);
  }

  ProgramRelated(ID:number): Observable<ObjectIDName[]> {
    let result = this.http.get<ObjectIDName[]>(`${environment.URL}/programs/getprogramidname_withcategoryid?ID=${ID}`, this.httpOptionsWithKey);
    return result;
  }

  //#endregion
}
