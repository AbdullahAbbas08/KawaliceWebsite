import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Params,
  ActivatedRoute
} from '@angular/router';
import { param } from 'jquery';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { Recently } from 'src/DTO/Recently';
import { EpisodeService } from './episode.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<any> {
  constructor(private _EpisodeService: EpisodeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Recently>> {

    return this._EpisodeService.GetEpisodebyID(Number(route.paramMap.get('EpisodeId'))).pipe(map(EpisodeDetail=>EpisodeDetail));



  }
}
