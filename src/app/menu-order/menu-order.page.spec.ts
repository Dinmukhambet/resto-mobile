import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderPage } from './menu-order.page';

describe('MenuOrderPage', () => {
  let component: MenuOrderPage;
  let fixture: ComponentFixture<MenuOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
