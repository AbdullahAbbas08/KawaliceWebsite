import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { HomeComponent } from './components/Home/home/home.component';
import { InterviewerComponent } from './components/Interviewer/Interviewer.component';
import { ProgramDetailsComponent } from './components/program/program-details/program-details.component';
import { ProgramComponent } from './components/program/Programs/program.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Categories',component:CategoryComponent},
  {path:'Programs',component:ProgramComponent},
  {path:'Interviewer',component:InterviewerComponent},
  {path:'Episode',component:EpisodeComponent},
  {path:'ProgramDetails',component:ProgramDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
