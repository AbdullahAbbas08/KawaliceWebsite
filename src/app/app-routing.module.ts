import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerResolverResolver } from 'src/Services/Interviewer/interviewer-resolver.resolver';
import { ProgramTypeResolver } from 'src/Services/ProgramType/program-type.resolver';
import { SliderResolver } from 'src/Services/Slider/slider.resolver';
import { TrendingResolver } from 'src/Services/trending.resolver';
import { CategoryComponent } from './components/category/category.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { HomeComponent } from './components/Home/home/home.component';
import { InterviewerComponent } from './components/Interviewer/Interviewer.component';
import { ProgramTypeComponent } from './components/program-type/program-type.component';
import { ProgramDetailsComponent } from './components/program/program-details/program-details.component';
import { ProgramComponent } from './components/program/Programs/program.component';

const routes: Routes = [
  {path:'',component:HomeComponent, resolve:{trending:TrendingResolver}},
  {path:'Categories',component:CategoryComponent},
  {path:'Programs',component:ProgramComponent},
  {path:'Interviewer',component:InterviewerComponent, resolve:{interviewer:InterviewerResolverResolver}},
  {path:'Episode',component:EpisodeComponent},
  {path:'ProgramDetails',component:ProgramDetailsComponent},
  {path:'Type',component:ProgramTypeComponent,resolve:{programType:ProgramTypeResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
