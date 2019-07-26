import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCardpinPage } from './bus-cardpin.page';

describe('BusCardpinPage', () => {
  let component: BusCardpinPage;
  let fixture: ComponentFixture<BusCardpinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusCardpinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusCardpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
