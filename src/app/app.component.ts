import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  images: any = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
      this.imagesService.getAllImages().subscribe(images => {
         this.images = images;
      });
      console.log(this.images);
  }
}
