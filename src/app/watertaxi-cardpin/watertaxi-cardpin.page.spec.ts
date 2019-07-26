import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertaxiCardpinPage } from './watertaxi-cardpin.page';

describe('WatertaxiCardpinPage', () => {
  let component: WatertaxiCardpinPage;
  let fixture: ComponentFixture<WatertaxiCardpinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatertaxiCardpinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatertaxiCardpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
