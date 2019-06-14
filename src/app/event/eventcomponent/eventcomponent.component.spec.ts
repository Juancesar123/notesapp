import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcomponentComponent } from './eventcomponent.component';

describe('EventcomponentComponent', () => {
  let component: EventcomponentComponent;
  let fixture: ComponentFixture<EventcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
