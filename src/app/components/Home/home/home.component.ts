import { Component, OnInit } from '@angular/core';
import { CollectionData } from 'src/DTO/collection-data';
import { Slider } from 'src/Models/Slider';
import { SliderService } from 'src/Services/Slider/slider.service';

import '../../../../assets/js/main.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jQuery: any;

  constructor() { }

  ngOnInit(): void {
  }




}
