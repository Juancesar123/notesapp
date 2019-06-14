import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventcomponentComponent } from './eventcomponent/eventcomponent.component';
import { PartiallayoutModule } from '../partiallayout/partiallayout.module';

@NgModule({
  declarations: [EventcomponentComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    PartiallayoutModule
  ]
})
export class EventModule { }
