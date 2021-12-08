import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { environment } from 'src/environments/environment';
import { ProgramType } from 'src/Models/ProgramType';

@Injectable({
  providedIn: 'root'
})
export class ProgramTypeService {

  constructor(private http:HttpClient) { }

  httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*'}) };

  getall():Observable<CollectionData<ProgramType>>{
    return this.http.get<CollectionData<ProgramType>>(`${environment.URL}/programtypes/getallprogramTypes`,this.httpOptionsWithKey)
  }
}
