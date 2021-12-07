import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { MostViewed } from 'src/DTO/MostViewed';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MostViewedService {

  constructor(private http:HttpClient) { }

  httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*'}) };

  getall():Observable<CollectionData<MostViewed>>{
    return this.http.get<CollectionData<MostViewed>>(`${environment.URL}/episodes/EpisodesMostViewes`,this.httpOptionsWithKey)
  }
}
