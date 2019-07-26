import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiCardpinPage } from './taxi-cardpin.page';

describe('TaxiCardpinPage', () => {
  let component: TaxiCardpinPage;
  let fixture: ComponentFixture<TaxiCardpinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiCardpinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiCardpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
