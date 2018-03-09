import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LabelsService {

  constructor(private http: Http) { }

  getAllLabels() {
    return this.http.get('/')
      .map(res => res.json());
  }

}
