import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suite2Component } from './suite2.component';

describe('Suite2Component', () => {
  let component: Suite2Component;
  let fixture: ComponentFixture<Suite2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Suite2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
