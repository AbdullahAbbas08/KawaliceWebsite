import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { Recently } from 'src/DTO/Recently';
import { Season } from 'src/Models/Season';
import { EpisodeService } from 'src/Services/Episode/episode.service';
import { ProgramService } from 'src/Services/program/Program.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  constructor(   private _EpisodeService: EpisodeService,private Service:ProgramService, private route: ActivatedRoute) { }

  //#region Declaration Section
  Episodes: CollectionData<Recently> = new CollectionData<Recently>();
  ProgramTitle:string = "";
  SeasonTitle:string = "";
  ProgramID:number = -1;
  // Seasons: Season[] = [];
  // categoryID: number = 0;
  // ProgramID: number = 0;

  Url: String = "";
  //#endregion

  ngOnInit(): void {

        this.GetEpisodes(); 
  }

  //#region Get Episodes Related With Season ID
  GetEpisodes()
  {
    this.Episodes = this.route.snapshot.data['Episodes'];
    this.ProgramTitle = this.Episodes.DataList[0].ProgramName;
    this.SeasonTitle = this.Episodes.DataList[0].SeasonTitle;
    this.ProgramID = this.Episodes.DataList[0].ProgramId;
    this.Url = this.Episodes.Url;
  }
  //#endregion

  //#region Set Data Into Service
  // SetEpisode(ID:number)
  // {
  //   this._EpisodeService.EpisodeID = ID;
  // }
 
  // SetProgramID(ID:number)
  // {
  //   this.Service.ProgramID = ID;
  // }
  // SetInterviewer(ID:number)
  // {
  //   this.interviewerService.InterviewerID = ID;
  // }
  //#endregion

}
