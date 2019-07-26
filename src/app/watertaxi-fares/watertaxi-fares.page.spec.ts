import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertaxiFaresPage } from './watertaxi-fares.page';

describe('WatertaxiFaresPage', () => {
  let component: WatertaxiFaresPage;
  let fixture: ComponentFixture<WatertaxiFaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatertaxiFaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatertaxiFaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
