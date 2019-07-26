import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusQrcodePage } from './bus-qrcode.page';

describe('BusQrcodePage', () => {
  let component: BusQrcodePage;
  let fixture: ComponentFixture<BusQrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusQrcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
