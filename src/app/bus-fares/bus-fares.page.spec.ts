import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusFaresPage } from './bus-fares.page';

describe('BusFaresPage', () => {
  let component: BusFaresPage;
  let fixture: ComponentFixture<BusFaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusFaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusFaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
