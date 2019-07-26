import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertaxiPagePage } from './watertaxi-page.page';

describe('WatertaxiPagePage', () => {
  let component: WatertaxiPagePage;
  let fixture: ComponentFixture<WatertaxiPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatertaxiPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatertaxiPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
