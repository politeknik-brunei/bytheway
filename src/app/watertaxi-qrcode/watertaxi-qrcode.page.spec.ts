import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertaxiQrcodePage } from './watertaxi-qrcode.page';

describe('WatertaxiQrcodePage', () => {
  let component: WatertaxiQrcodePage;
  let fixture: ComponentFixture<WatertaxiQrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatertaxiQrcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatertaxiQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
