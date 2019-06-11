import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from '../homepage/homepage.module';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent]
})
export class PartiallayoutModule { }
