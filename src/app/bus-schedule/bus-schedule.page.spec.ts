import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSchedulePage } from './bus-schedule.page';

describe('BusSchedulePage', () => {
  let component: BusSchedulePage;
  let fixture: ComponentFixture<BusSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusSchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
