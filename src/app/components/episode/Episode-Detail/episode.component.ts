import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectionData } from 'src/DTO/collection-data';
import { ProgramModel } from 'src/DTO/Program/program-model';
import { Recently } from 'src/DTO/Recently';
import { Season } from 'src/Models/Season';
import { EpisodeService } from 'src/Services/Episode/episode.service';
import { ProgramService } from 'src/Services/program/Program.service';
import { SeasonService } from 'src/Services/Seasons/season.service';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  constructor(private Service: ProgramService,
    private _SeasonService: SeasonService,
    private _EpisodeService: EpisodeService,
    private route: ActivatedRoute) { }

  //#region Declaration Section
  EpisodeObject: Recently = new Recently();
  Programs: CollectionData<ProgramModel> = new CollectionData<ProgramModel>();
  Seasons: Season[] = [];
  Episodes: Recently[] = [];
  EpisodesRelated: Recently[] = [];
  EpisodeCollection: CollectionData<Recently> = new CollectionData<Recently>();
  categoryID: number = 0;
  ProgramID: number = 0;
  Url: String = "";
  //#endregion

  //#region Init Methode
  ngOnInit(): void {
    this.EpisodesRelated = [];
    // this.GetEpisodebyID( query['id']);
    // this.route.queryParams.subscribe(
    //   (query) => {
    //       this._EpisodeService.GetEpisodebyID(query['id']).subscribe(
    //         (data) => {
    //           this.EpisodeCollection = data;
    //           this.EpisodeObject = this.EpisodeCollection .DataList[0];
    //           // console.log(this.EpisodeObject)
    //           this.Url = this.EpisodeCollection.Url;
    //         },
    //         (err) => { }
    //       );
    //     })

    //Get Episodes Related
    this.route.params.forEach((param:Params)=>{
      this.GetEpisodebyID();
      this.getEpisodesRelated();
    });
    window.scrollTo(0, 0)
  }

  //#endregion

  //#region Get All Season Realted With This Program
  // GetEpisodebyID(id: number) {
  //   //#region  Filter Program By Category ID
  //   //this.route.queryParams.subscribe( (query)=>{ this.ProgramID = query['id']  })
  //   //#endregion
  //   let Episodes = this._EpisodeService.GetEpisodebyProgramID(id).subscribe(
  //     (data) => {
  //       this.EpisodeCollection = data;
  //       this.EpisodeObject =  this.EpisodeCollection .DataList[0];
  //       this.Url = this.EpisodeCollection.Url;
  //     },
  //     (err) => { }
  //   );
  // }
  //#endregion

  //#region Get Episode Details
  GetEpisodebyID() {
    this.EpisodeCollection = this.route.snapshot.data['EpisodeDetail'];
    this.EpisodeObject = this.EpisodeCollection.DataList[0];
    this.Url = this.EpisodeCollection.Url;
  }

  //#endregion

  //#region Get Episodes Related With Program ID
  getEpisodesRelated() {
    let res = this._EpisodeService.GetEpisodebyProgramID(this.EpisodeObject.ProgramId).subscribe(
      (data) => {
       this.EpisodesRelated = data.DataList.filter(x => x.EpisodeId != this.EpisodeObject.EpisodeId)
      },
      (err) => {});




  }
  //#endregion

}
