import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { Trending } from 'src/DTO/Trending';
import { TrendingService } from './trending.service';

@Injectable({
  providedIn: 'root'
})
export class TrendingResolver implements Resolve<any> {
  constructor(private trendingService:TrendingService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Trending>> {
    return  this.trendingService.getall().pipe(map(trending=>trending));
  }
}
