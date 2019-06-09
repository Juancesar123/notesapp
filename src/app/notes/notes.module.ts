import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';
import { NotescomponentComponent } from './notescomponent/notescomponent.component';

@NgModule({
  declarations: [NotescomponentComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule
  ]
})
export class NotesModule { 
  
}
