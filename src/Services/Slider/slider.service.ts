import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Slider } from 'src/Models/Slider';
import { CollectionData } from 'src/DTO/collection-data';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http:HttpClient) { }

  httpOptionsWithKey = { headers: new HttpHeaders({ 'ApiKey': 'ac6716a0-039d-4d21-98b5-dcefa416e266', 'Accept': ' */*'}) };

  getall():Observable<CollectionData<Slider>>{
    return this.http.get<CollectionData<Slider>>(`${environment.URL}/Slider/getallslidersapikey`,this.httpOptionsWithKey)
  }
}


