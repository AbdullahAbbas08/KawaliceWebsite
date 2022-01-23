import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http:HttpClient) { }

    //#region Options
    httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
    //#endregion

  getAdsByID(ID):Observable<any>{
    return this.http.get(`${environment.URL}/ADS/getalladsbyplaceid?Code=${ID}`, this.httpOptionsWithKey)
  }
}
