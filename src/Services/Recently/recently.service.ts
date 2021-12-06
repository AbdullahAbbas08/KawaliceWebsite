import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { Recently } from 'src/DTO/Recently';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecentlyService {

  constructor(private http:HttpClient) { }

  httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*'}) };

  getall():Observable<CollectionData<Recently>>{
    return this.http.get<CollectionData<Recently>>(`${environment.URL}/episodes/episodesrecently`,this.httpOptionsWithKey)
  }
}
