import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { Program } from 'src/Models/Program';
import { CategoryService } from '../Category/category.service';
import { ProgramService } from './Program.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramResolver implements Resolve<any> {
  constructor(private Service:ProgramService , private _CategoryService:CategoryService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Program>> {
    return this.Service.GetProgramsByCatId(this._CategoryService.categoryID).pipe(map(programs=>programs));
  }
}
