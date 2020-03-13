import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('serverNameInput', {static: true}) serverNameInput :ElementRef;
  @ViewChild('serverContentInput', {static: true}) serverContentInput :ElementRef;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName:this.serverNameInput.nativeElement.value,
      serverContent:this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName:this.serverNameInput.nativeElement.value,
      serverContent:this.serverContentInput.nativeElement.value})
  }

}
