import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/Home/home/home.component';
import { InterviewerComponent } from './components/Interviewer/Interviewer.component';
import { ProgramComponent } from './components/program/program.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Categories/abc',component:CategoryComponent},
  {path:'Programs',component:ProgramComponent},
  {path:'Interviewer',component:InterviewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
