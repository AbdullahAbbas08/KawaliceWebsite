import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionData } from 'src/DTO/collection-data';
import { Slider } from 'src/Models/Slider';
import { SliderService } from './slider.service';

@Injectable({
  providedIn: 'root'
})
export class SliderResolver implements Resolve<any> {

  constructor(private slider:SliderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionData<Slider>> {
    return this.slider.getall().pipe(map(slider=>slider));
  }
}
