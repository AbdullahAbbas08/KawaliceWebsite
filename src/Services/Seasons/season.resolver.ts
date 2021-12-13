import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SeasonService } from './season.service';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { Recently } from 'src/DTO/Recently';


@Injectable({
  providedIn: 'root'
})
export class SeasonResolver implements Resolve<any> {
  constructor(private Service:SeasonService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Recently>> {
    return this.Service.GetSeasonsByProgramId(Number(route.paramMap.get('ProgramID'))).pipe(map(Seasons=>Seasons));

  }
}
