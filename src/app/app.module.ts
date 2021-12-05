import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home/home.component';
import { LayoutComponent } from './Shared/layout/layout.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramComponent } from './components/program/program.component';


import { SliderComponent } from './components/Home/slider/slider.component';
import { TrendingComponent } from './components/Home/trending/trending.component';
import { RecentlyComponent } from './components/Home/recently/recently.component';
import { SuperStarComponent } from './components/Home/super-star/super-star.component';
import { MostViewsComponent } from './components/Home/most-views/most-views.component';
import { SeeMoreComponent } from './components/Home/see-more/see-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    CategoryComponent,
    ProgramComponent

    SliderComponent,
    TrendingComponent,
    RecentlyComponent,
    SuperStarComponent,
    MostViewsComponent,
    SeeMoreComponent
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
