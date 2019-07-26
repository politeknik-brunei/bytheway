import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusPagePage } from './bus-page.page';

describe('BusPagePage', () => {
  let component: BusPagePage;
  let fixture: ComponentFixture<BusPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
