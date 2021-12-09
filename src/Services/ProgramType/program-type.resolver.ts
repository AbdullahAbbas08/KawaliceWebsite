import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramType } from 'src/Models/ProgramType';
import { ProgramTypeService } from './program-type.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramTypeResolver implements Resolve<any> {

  constructor(private ProgramTypeService:ProgramTypeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<ProgramType>> {
    return this.ProgramTypeService.getall().pipe(map(programType=>programType));
  }
}
