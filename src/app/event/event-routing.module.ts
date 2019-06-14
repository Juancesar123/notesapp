import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventcomponentComponent } from './eventcomponent/eventcomponent.component';

const routes: Routes = [
  {
    path:'',
    component:EventcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
