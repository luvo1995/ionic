import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditemPage } from './aditem.page';

describe('AditemPage', () => {
  let component: AditemPage;
  let fixture: ComponentFixture<AditemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
