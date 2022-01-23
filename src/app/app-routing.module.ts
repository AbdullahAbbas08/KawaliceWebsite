import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolver } from 'src/Services/Category/category.resolver';
import { EpisodeResolver } from 'src/Services/Episode/episode.resolver';
import { EpisodesRelatedResolver } from 'src/Services/Episode/episodes-related.resolver';
import { InterviewerDetailResolver } from 'src/Services/Interviewer/interviewer-detail.resolver';
import { InterviewerResolverResolver } from 'src/Services/Interviewer/interviewer-resolver.resolver';
import { AllProgramsResolver } from 'src/Services/program/all-programs.resolver';
import { ProgramDetailsResolver } from 'src/Services/program/program-details.resolver';
import { ProgramResolver } from 'src/Services/program/program.resolver';
import { ProgramByTypeResolver } from 'src/Services/program/programByType.resolver';
import { ProgramTypeResolver } from 'src/Services/ProgramType/program-type.resolver';
import { SliderResolver } from 'src/Services/Slider/slider.resolver';
import { TrendingResolver } from 'src/Services/trending.resolver';
import { CategoryComponent } from './components/category/category.component';
import { EpisodeComponent } from './components/episode/Episode-Detail/episode.component';
import { EpisodesComponent } from './components/episode/episodes/episodes.component';
import { HomeComponent } from './components/Home/home/home.component';
import { InterviewerDetailComponent } from './components/Interviewer/interviewer-detail/interviewer-detail.component';
import { InterviewerComponent } from './components/Interviewer/Interviewer.component';
import { ProgramTypeComponent } from './components/program-type/program-type.component';
import { ProgramDetailsComponent } from './components/program/program-details/program-details.component';
import { ProgramComponent } from './components/program/Programs/program.component';

const routes: Routes = [
  {path:'',component:HomeComponent, resolve:{trending:TrendingResolver,slider:SliderResolver}, pathMatch: 'full' },
  {path:'Categories', component:CategoryComponent , resolve:{categories:CategoryResolver}},
  {path:'Programs/:CategoryId', component:ProgramComponent , resolve:{programs:ProgramResolver}},
  {path:'Programs', component:ProgramComponent , resolve:{Allprograms:AllProgramsResolver , programsByType:ProgramByTypeResolver}},
  {path:'Interviewer',component:InterviewerComponent, resolve:{interviewer:InterviewerResolverResolver}},
  {path:'ProgramDetails/:ProgramID',component:ProgramDetailsComponent, resolve:{programDetail:ProgramDetailsResolver}},
  {path:'InterviewerDetails/:InterviewerID',component:InterviewerDetailComponent, resolve:{interviewer:InterviewerDetailResolver}},
  {path:'Episode/:EpisodeId',component:EpisodeComponent, resolve:{EpisodeDetail:EpisodeResolver}},
  {path:'Episodes/:SeasonID',component:EpisodesComponent, resolve:{Episodes:EpisodesRelatedResolver}},
  {path:'Type',component:ProgramTypeComponent,resolve:{programType:ProgramTypeResolver}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
exports: [RouterModule]
})
export class AppRoutingModule { }
