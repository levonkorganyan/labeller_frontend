import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {
  labels: any = [];
  constructor(private labelsService: LabelsService) { }

  ngOnInit() {
    this.labelsService.getAllLabels().subscribe(labels => {
      this.labels = labels;
    });
  }
}
