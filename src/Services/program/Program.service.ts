import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { environment } from 'src/environments/environment';
import { Program } from 'src/Models/Program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  //#region Options
  httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
  //#endregion

  //#region  Interviewers API's
  GetPrograms(): Observable<CollectionData<Program>> {
    return this.http.get<CollectionData<Program>>(`${environment.URL}/programs/getallprogramsapikey`, this.httpOptionsWithKey);
  }
  //#endregion

}
