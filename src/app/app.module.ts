import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LabelsComponent } from './labels/labels.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [LabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
