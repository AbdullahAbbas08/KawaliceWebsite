import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home/home.component';
import { LayoutComponent } from './Shared/layout/layout.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';


import { SliderComponent } from './components/Home/slider/slider.component';
import { TrendingComponent } from './components/Home/trending/trending.component';
import { RecentlyComponent } from './components/Home/recently/recently.component';
import { SuperStarComponent } from './components/Home/super-star/super-star.component';
import { MostViewsComponent } from './components/Home/most-views/most-views.component';
import { SeeMoreComponent } from './components/Home/see-more/see-more.component';
import { InterviewerComponent } from './components/Interviewer/Interviewer.component';
import { ProgramComponent } from './components/program/Programs/program.component';
import { ProgramDetailsComponent } from './components/program/program-details/program-details.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { ProgramTypeComponent } from './components/program-type/program-type.component';
import { ArabicNumberPipe } from './Shared/Pipes/arabic-number.pipe';
import { InterviewerDetailComponent } from './components/Interviewer/interviewer-detail/interviewer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    CategoryComponent,
    ProgramComponent,
    InterviewerComponent,

    SliderComponent,
    TrendingComponent,
    RecentlyComponent,
    SuperStarComponent,
    MostViewsComponent,
    SeeMoreComponent,
    ProgramDetailsComponent,
    EpisodeComponent,
    ProgramTypeComponent,
    ArabicNumberPipe,
    InterviewerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
