import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { Recently } from 'src/DTO/Recently';
import { ProgramService } from '../program/Program.service';
import { EpisodeService } from './episode.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodesRelatedResolver implements Resolve<any> {
  constructor(private Service: ProgramService , private _EpisodeService:EpisodeService ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Recently>> {
    return this._EpisodeService.GetEpisodesbySeasonID(Number(route.paramMap.get('SeasonID'))).pipe(map(Episodes=>Episodes));

  }
}
