import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'async-image',
    templateUrl: './async-image.component.html',
    styleUrls: ['./async-image.component.css']
})
export class AsyncImageComponent implements OnInit, AfterViewInit {
    @ViewChild('image') input: ElementRef;
    @Input() imageData: string;
    loading: boolean = true;

    ngOnInit() {
        console.log(this.imageData);
    }
    onLoad() {
        this.loading = false;
    }
    ngAfterViewInit() {
        /*
        const self = this;
        const img = document.createElement('img');
        img.onload = () => {
            img.remove();
            console.log('Time to make child image visible');
            console.log(this.input);
            this.input.nativeElement.classList.add('show');
        };
        img.src = "https://cdn-images-1.medium.com/max/1200/1*Ifm00n-npUdYWTDbZag3rQ.png";*/
    }
}
