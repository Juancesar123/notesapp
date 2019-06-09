import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotescomponentComponent } from './notescomponent.component';

describe('NotescomponentComponent', () => {
  let component: NotescomponentComponent;
  let fixture: ComponentFixture<NotescomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotescomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
