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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    CategoryComponent,
    ProgramComponent
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
