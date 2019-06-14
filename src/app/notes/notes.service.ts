import { Injectable } from '@angular/core';
import { FeathersService } from '../feathers.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private feathers:FeathersService) { }
  viewNotes() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('notes'))
      .watch()
      .find();
  }


  createNotes(data) {
    // feathers-reactive Observables are hot by default,
    // so we don't need to subscribe to make create() happen.
    this.feathers
      .service('notes')
      .create(data);
  }
  removeNotes(id){
    this.feathers.service('notes').remove(id)
  }
  updateNotes(data,id){
    this.feathers.service('notes').patch(id, data);
  }
}
