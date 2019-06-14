import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FeathersService } from 'src/app/feathers.service';
import { Observable } from 'rxjs';
import { NotesService } from '../notes.service';
import { Paginated } from '@feathersjs/feathers';
import { map } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-notescomponent',
  templateUrl: './notescomponent.component.html',
  styleUrls: ['./notescomponent.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NotescomponentComponent implements OnInit {
  status: boolean = false;
  status1: boolean = false;
  messages$: Observable<any[]>;
  title:String;
  description:String;
  data:any;
  status2 : boolean = false;
  id:String;
  constructor(private notesservice : NotesService) {
     // get messages from data service
     this.messages$ = notesservice.viewNotes().pipe(
      // our data is paginated, so map to .data
      map((m: Paginated<any>) => m.data),
      // reverse the messages array, to have the most recent message at the end
      // necessary because we get a descendingly sorted array from the data service
      map(m => m.reverse()),
    );
   }
   trackByFn(index, item) {
    return item._id; // or item.id
  }
  ngOnInit() {
  }
  saveNotes(){
    this.data = {
      title:this.title,
      description:this.description
    }
    this.notesservice.createNotes(this.data)
  }
  togglebutton(){
    this.status = !this.status
  }
  togglebutton1(item){
    this.title = item.title,
    this.description = item.description
    this.id = item._id;
    this.status1 = !this.status1
  }
  closebutton(){
    this.status1 = !this.status1
  }
  closebutton1(){
    this.status2 = !this.status2
  }
  deleteNotes(message){
    this.notesservice.removeNotes(message._id)
  }
  editNotes(){
    this.data = {
      title:this.title,
      description:this.description
    }
    this.notesservice.updateNotes(this.data,this.id)
  }
  togglebutton2(item){
    this.title = item.title,
    this.description = item.description
    this.id = item._id;
    this.status2 = !this.status2
  }
  viewDetails(){

  }
}
