import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToatsContainerComponent } from './toats-container.component';

describe('ToatsContainerComponent', () => {
  let component: ToatsContainerComponent;
  let fixture: ComponentFixture<ToatsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToatsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToatsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
