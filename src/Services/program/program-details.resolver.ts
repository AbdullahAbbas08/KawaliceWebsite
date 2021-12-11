import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { ProgramService } from './Program.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramDetailsResolver implements Resolve<any> {
  constructor(private Service:ProgramService ,  private route:ActivatedRoute){}

    //#region Declare Variables
    ProgramID:any;
    //#endregion

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<ProgramModel>> {
    return this.Service.GetProgramById(this.Service.ProgramID).pipe(map(programDetail=>programDetail));
  }
}
