import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiFaresPage } from './taxi-fares.page';

describe('TaxiFaresPage', () => {
  let component: TaxiFaresPage;
  let fixture: ComponentFixture<TaxiFaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiFaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiFaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
