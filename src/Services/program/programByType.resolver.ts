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
export class ProgramByTypeResolver implements Resolve<any> {
  constructor(private Service:ProgramService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Program>> {
    return this.Service.GetProgramsByTypeId(Number(route.queryParamMap.get('Type'))).pipe(map(programsByType=>programsByType));
  }
}
