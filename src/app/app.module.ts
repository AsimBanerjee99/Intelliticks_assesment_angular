import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewListedPropertyComponent } from './view-listed-property/view-listed-property.component';

import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { PropertyServiceService } from './property-service.service'

@NgModule({
  declarations: [
    AppComponent,

    AddPropertyComponent,
    ViewListedPropertyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule
  ],
  providers: [PropertyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
