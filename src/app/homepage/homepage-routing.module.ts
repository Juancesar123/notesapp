import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepagecomponentComponent } from './homepagecomponent/homepagecomponent.component';

const routes: Routes = [
  {
    path:'',
    component:HomepagecomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
