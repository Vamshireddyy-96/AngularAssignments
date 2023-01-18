

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { DisplaylogComponent } from './displaylog/displaylog.component';
import { Assignment3Component } from './assignment3/assignment3.component';


@NgModule({

  declarations: [

    AppComponent,
   WarningAlertComponent,
    SuccessAlertComponent,
    Assignment2Component,
    DisplaylogComponent,
    Assignment3Component

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,FormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }