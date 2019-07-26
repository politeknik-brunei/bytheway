import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusGeolocationPage } from './bus-geolocation.page';

describe('BusGeolocationPage', () => {
  let component: BusGeolocationPage;
  let fixture: ComponentFixture<BusGeolocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusGeolocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusGeolocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
