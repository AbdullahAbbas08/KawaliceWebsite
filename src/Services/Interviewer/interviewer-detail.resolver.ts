import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CollectionData } from 'src/DTO/collection-data';
import { InterviewerProgfile } from 'src/DTO/Interviewer/interviewer-progfile';
import { InterviewerService } from './Interviewer.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewerDetailResolver implements Resolve<any> {
  constructor(private Service:InterviewerService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<InterviewerProgfile>> {
    return this.Service.GetInterviewer().pipe(map(interviewer=>interviewer));
  }
}
