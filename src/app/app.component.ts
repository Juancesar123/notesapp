import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status: boolean = false;
  title = 'notesapp';
  togglebutton(){
    this.status = !this.status
  }
}
