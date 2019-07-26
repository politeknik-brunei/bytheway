import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiGeolocationPage } from './taxi-geolocation.page';

describe('TaxiGeolocationPage', () => {
  let component: TaxiGeolocationPage;
  let fixture: ComponentFixture<TaxiGeolocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiGeolocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiGeolocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
