import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { Trending } from 'src/DTO/Trending';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }

  httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*'}) };

  getall():Observable<CollectionData<Trending>>{
    return this.http.get<CollectionData<Trending>>(`${environment.URL}/episodes/episodestrending?IsRecently=desc`,this.httpOptionsWithKey)
  }
}
