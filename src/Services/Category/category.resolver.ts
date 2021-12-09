import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { Category } from 'src/Models/Category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<any> {

  constructor(private Service:CategoryService){}

  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Category>> {
    return this.Service.GetCategories().pipe(map(categories=>categories));
  }
}
