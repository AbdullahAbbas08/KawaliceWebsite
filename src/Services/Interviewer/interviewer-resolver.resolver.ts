import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { InterviewerService } from 'src/Services/Interviewer/Interviewer.service';
import {map}from 'rxjs/operators'
import { InterViewer } from 'src/Models/InterViewer';
import { CollectionData } from 'src/DTO/collection-data';

@Injectable({
  providedIn: 'root'
})
export class InterviewerResolverResolver implements Resolve<any> {

  constructor(private Service:InterviewerService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<InterViewer>> {
    return this.Service.GetInterviewer().pipe(map(interviewer=>interviewer));
  }
}
