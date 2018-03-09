import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'async-image',
    templateUrl: './async-image.component.html',
    styleUrls: ['./async-image.component.css']
})
export class AsyncImageComponent implements OnInit, AfterViewInit {
    @ViewChild('image') input: ElementRef;
    @Input() imageData: any = [];

    loading: boolean = true;

    ngOnInit() {
        console.log(this.imageData);
    }
    onLoad() {
        this.loading = false;
    }

    ngAfterViewInit() {

    }
}
