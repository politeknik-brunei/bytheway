import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiPagePage } from './taxi-page.page';

describe('TaxiPagePage', () => {
  let component: TaxiPagePage;
  let fixture: ComponentFixture<TaxiPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
