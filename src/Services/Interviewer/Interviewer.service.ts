import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { InterviewerProgfile } from 'src/DTO/Interviewer/interviewer-progfile';
import { environment } from 'src/environments/environment';
import { InterViewer } from 'src/Models/InterViewer';
import { SuperStar } from 'src/Models/SuperStar';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

constructor(private http: HttpClient) { }

      //#region  Variables
      // InterviewerID:number;
      //#endregion

    //#region Options
    httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
    //#endregion

    //#region  Interviewers API's
    GetInterviewer(): Observable<CollectionData<InterViewer>> {
      return this.http.get<CollectionData<InterViewer>>(`${environment.URL}/interviewers/getalliterviewers`, this.httpOptionsWithKey);
    }
    //#endregion

    //#region SuperStar API
    GetSuperStars(): Observable<CollectionData<SuperStar>> {
      return this.http.get<CollectionData<SuperStar>>(`${environment.URL}/interviewers/superstar`, this.httpOptionsWithKey);
    }
    //#endregion

        //#region Find Interviewer
        FindInterviewer(ID:number): Observable<CollectionData<InterviewerProgfile>> {
          return this.http.get<CollectionData<InterviewerProgfile>>(`${environment.URL}/interviewers/findinterviewer?ID=${ID}`, this.httpOptionsWithKey);
        }
        //#endregion
}
