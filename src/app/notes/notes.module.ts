import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';
import { NotescomponentComponent } from './notescomponent/notescomponent.component';
import { HeaderComponent } from '../header/header.component';
import { AppModule } from '../app.module';
import { PartiallayoutModule } from '../partiallayout/partiallayout.module';

@NgModule({
  declarations: [NotescomponentComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    PartiallayoutModule
  ]
})
export class NotesModule { 
  
}
