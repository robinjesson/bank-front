import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayWritingsComponent } from './array-writings.component';

describe('ArrayWritingsComponent', () => {
  let component: ArrayWritingsComponent;
  let fixture: ComponentFixture<ArrayWritingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayWritingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayWritingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
