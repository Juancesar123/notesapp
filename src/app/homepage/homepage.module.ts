import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepagecomponentComponent } from './homepagecomponent/homepagecomponent.component';
import { HeaderComponent } from '../header/header.component';
import { PartiallayoutModule } from '../partiallayout/partiallayout.module';

@NgModule({
  declarations: [HomepagecomponentComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    PartiallayoutModule
  ]
})
export class HomepageModule { }
