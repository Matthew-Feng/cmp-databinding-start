import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element:{type:string,name:string,content:string}
  @ViewChild('heading', {static: true}) header:ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    // console.log(this.header.nativeElement.textContent);

   }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent)
  }

}
