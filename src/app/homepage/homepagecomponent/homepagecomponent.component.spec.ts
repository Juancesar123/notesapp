import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecomponentComponent } from './homepagecomponent.component';

describe('HomepagecomponentComponent', () => {
  let component: HomepagecomponentComponent;
  let fixture: ComponentFixture<HomepagecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
