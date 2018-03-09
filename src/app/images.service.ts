import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


const API = 'http://localhost:3000/';

@Injectable()
export class ImagesService {
  constructor(private http: Http) {}

  getAllImages() {
      return this.http.get(API)
              .map(res => {
                    if(res.status < 200 || res.status >= 300) {
                      console.log('This request has failed ' + res.status);
                    } else {
                      return res.json();
                    }});
  }
}
