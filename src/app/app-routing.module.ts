import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealtimeguardGuard } from './realtimeguard.guard';

const routes: Routes = [
  {
    path:'notes',
    loadChildren:'./notes/notes.module#NotesModule',
    canActivate:[RealtimeguardGuard]
  },
  {
    path:'',
    loadChildren:'./homepage/homepage.module#HomepageModule',
    canActivate:[RealtimeguardGuard]
  },
  {
    path:'login',
    loadChildren:'./login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
