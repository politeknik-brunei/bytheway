import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiSeatsPage } from './taxi-seats.page';

describe('TaxiSeatsPage', () => {
  let component: TaxiSeatsPage;
  let fixture: ComponentFixture<TaxiSeatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiSeatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiSeatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
