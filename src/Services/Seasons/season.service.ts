import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { Recently } from 'src/DTO/Recently';
import { environment } from 'src/environments/environment';
import { Season } from 'src/Models/Season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

      //#region Options
      httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
      //#endregion

     //#region  All Seasons By Program ID
GetSeasonsByProgramId(ID:number): Observable<CollectionData<Recently>> {
  return this.http.get<CollectionData<Recently>>(`${environment.URL}/episodes/episodesfilterforseasons?&ProgramID=${ID}`, this.httpOptionsWithKey);
}
//#endregion 

}
