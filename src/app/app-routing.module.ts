import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolver } from 'src/Services/Category/category.resolver';
import { InterviewerResolverResolver } from 'src/Services/Interviewer/interviewer-resolver.resolver';
import { ProgramResolver } from 'src/Services/program/program.resolver';
import { ProgramTypeResolver } from 'src/Services/ProgramType/program-type.resolver';
import { SliderResolver } from 'src/Services/Slider/slider.resolver';
import { TrendingResolver } from 'src/Services/trending.resolver';
import { CategoryComponent } from './components/category/category.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { HomeComponent } from './components/Home/home/home.component';
import { InterviewerDetailComponent } from './components/Interviewer/interviewer-detail/interviewer-detail.component';
import { InterviewerComponent } from './components/Interviewer/Interviewer.component';
import { ProgramTypeComponent } from './components/program-type/program-type.component';
import { ProgramDetailsComponent } from './components/program/program-details/program-details.component';
import { ProgramComponent } from './components/program/Programs/program.component';

const routes: Routes = [
  {path:'',component:HomeComponent, resolve:{trending:TrendingResolver}},
  {path:'Categories', component:CategoryComponent , resolve:{categories:CategoryResolver}},
  {path:'Programs', component:ProgramComponent , resolve:{programs:ProgramResolver}},
  {path:'Interviewer',component:InterviewerComponent, resolve:{interviewer:InterviewerResolverResolver}},
  {path:'Episode',component:EpisodeComponent},
  {path:'ProgramDetails',component:ProgramDetailsComponent},
  {path:'Type',component:ProgramTypeComponent,resolve:{programType:ProgramTypeResolver}},
  {path:'InterviewerDetails',component:InterviewerDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
