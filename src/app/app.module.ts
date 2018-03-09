import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AsyncImageComponent } from './async-image.component';
import { ImagesService } from './images.service';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncImageComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
