import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AsyncImageComponent } from './async-image.component';
import { ImagesService } from './images.service';

@NgModule({
  declarations: [
    AppComponent,
    AsyncImageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
