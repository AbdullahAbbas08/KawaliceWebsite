import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { environment } from 'src/environments/environment';
import { Program } from 'src/Models/Program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

      //#region  Variables
      // ProgramID : number;
      SeasonID:number;
      //#endregion

  //#region Options
  httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
  //#endregion

  //#region  Program API's
  GetPrograms(): Observable<CollectionData<Program>> {
    return this.http.get<CollectionData<Program>>(`${environment.URL}/programs/getallprogramsapikey`, this.httpOptionsWithKey);
  }
  //#endregion

//#region  All Program By Category ID
GetProgramsByCatId(ID:number): Observable<CollectionData<Program>> {
  return this.http.get<CollectionData<Program>>(`${environment.URL}/programs/getallprogramsbycategoryid?ID=${ID}`, this.httpOptionsWithKey);
}
//#endregion

//#region Program By ID
GetProgramById(ID:number): Observable<CollectionData<ProgramModel>> {
  return  this.http.get<CollectionData<ProgramModel>>(`${environment.URL}/episodes/Programfilterforrecently?ProgramID=${ID}`, this.httpOptionsWithKey);
}
//#endregion

//#region  Program By Interviewer ID
//
GetProgramsByInterviewerId(ID:number): Observable<CollectionData<Program>> {
  let x=  this.http.get<CollectionData<Program>>(`${environment.URL}/interviewers/getprogramsbyinterviewerid?ID=${ID}`, this.httpOptionsWithKey);
return x;
}
//#endregion

//#region  Program By Type ID
//
GetProgramsByTypeId(ID:number): Observable<CollectionData<Program>> {
  return this.http.get<CollectionData<Program>>(`${environment.URL}/programs/getallprogramsbytypeid?ID=${ID}`, this.httpOptionsWithKey);

}
//#endregion

}
