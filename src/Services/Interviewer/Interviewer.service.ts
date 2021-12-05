import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { environment } from 'src/environments/environment';
import { InterViewer } from 'src/Models/InterViewer';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

constructor(private http: HttpClient) { }

    //#region Options
    httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
    //#endregion

    //#region  Interviewers API's
    GetInterviewer(): Observable<CollectionData<InterViewer>> {
      return this.http.get<CollectionData<InterViewer>>(`${environment.URL}/interviewers/getalliterviewers`, this.httpOptionsWithKey);
    }
    //#endregion
}
