import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const API = 'http://localhost:3000';

@Injectable()
export class ImagesService {
  constructor(private http: Http) {}

  getAllImages() {
      return this.http.get('/');
  }
}