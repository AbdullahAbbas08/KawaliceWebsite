import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { InterviewerProgfile } from 'src/DTO/Interviewer/interviewer-progfile';
import { InterviewerService } from './Interviewer.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewerDetailResolver implements Resolve<any> {
  constructor(private Service:InterviewerService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<InterviewerProgfile>> {
    return this.Service.FindInterviewer(this.Service.InterviewerID).pipe(map(interviewer=>interviewer));
  }
}
