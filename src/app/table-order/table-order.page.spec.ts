import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrderPage } from './table-order.page';

describe('TableOrderPage', () => {
  let component: TableOrderPage;
  let fixture: ComponentFixture<TableOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
