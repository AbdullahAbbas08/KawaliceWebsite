import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { Program } from 'src/Models/Program';
import { map } from 'rxjs/operators';
import { ProgramService } from './Program.service';
import { CategoryService } from '../Category/category.service';

@Injectable({
  providedIn: 'root'
})
export class AllProgramsResolver implements Resolve<any> {
  constructor(private Service:ProgramService , private _CategoryService:CategoryService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Program>> {
    
    return this.Service.GetPrograms().pipe(map(Allprograms=>Allprograms));
  }
}
