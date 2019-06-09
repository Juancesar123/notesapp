import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notescomponent',
  templateUrl: './notescomponent.component.html',
  styleUrls: ['./notescomponent.component.scss']
})
export class NotescomponentComponent implements OnInit {
  status: boolean = false;
  status1: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  togglebutton(){
    this.status = !this.status
  }
  closebutton(){
    this.status1 = !this.status1
  }

}
