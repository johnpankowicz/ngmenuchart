import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashSidenav2Component } from './dash-sidenav2/dash-sidenav2.component'

import { AppComponent } from './app.component';
import { AmguageComponent } from './amguage/amguage.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AmguageComponent,
    DashSidenav2Component
  ],
  imports: [
    BrowserModule,
    NgMaterialMultilevelMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
