import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { Recently } from 'src/DTO/Recently';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }
  
  //#region Variables
  EpisodeID:number;
  //#endregion

      //#region Options
      httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*' }) };
      //#endregion

      GetEpisodebyProgramID(ID:number): Observable<CollectionData<Recently>> {
        return  this.http.get<CollectionData<Recently>>(`${environment.URL}/episodes/episodesfilterforrecently?IsRecently=DESC&ProgramID=${ID}`, this.httpOptionsWithKey);
      }

      GetEpisodebyID(ID:number): Observable<CollectionData<Recently>> {
        return  this.http.get<CollectionData<Recently>>(`${environment.URL}/episodes/episodesfilterforrecently?EpisodeID=${ID}`, this.httpOptionsWithKey);
      }

      GetEpisodes(): Observable<CollectionData<Recently>> {
        return  this.http.get<CollectionData<Recently>>(`${environment.URL}/episodes/episodesfilterforrecently`, this.httpOptionsWithKey);
      }

      GetEpisodesbySeasonID(ID:number): Observable<CollectionData<Recently>> {
        return  this.http.get<CollectionData<Recently>>(`${environment.URL}/episodes/episodesfilterforrecently?SeasonID=${ID}`, this.httpOptionsWithKey);
      }
}
