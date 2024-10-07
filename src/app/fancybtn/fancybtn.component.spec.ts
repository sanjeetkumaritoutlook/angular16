import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancybtnComponent } from './fancybtn.component';

describe('FancybtnComponent', () => {
  let component: FancybtnComponent;
  let fixture: ComponentFixture<FancybtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancybtnComponent]
    });
    fixture = TestBed.createComponent(FancybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
