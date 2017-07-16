import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import {BooksModule} from  '../books/books.module'

import { AppComponent } from './app.component';
import {StudentViewComponent} from "./students-view/students-view";
import {MyHightLight} from './myhighlight.directive';
import {HomeComponent} from './home/home.component';
import {ContactUsComponent} from './contactus/contactus.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';


import {TaxiRankComponent} from './taxiranks/taxirank-component';

const routes :Routes = [
  { path: 'home' , component : HomeComponent } ,
  {path :'contactus', component: ContactUsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    StudentViewComponent,
    TaxiRankComponent,
    MyHightLight
  ],
  imports: [
    BooksModule,
    RouterModule.forRoot(routes,{enableTracing:true}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
