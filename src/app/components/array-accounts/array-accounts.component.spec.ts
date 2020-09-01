import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayAccountsComponent } from './array-accounts.component';

describe('ArrayAccountsComponent', () => {
  let component: ArrayAccountsComponent;
  let fixture: ComponentFixture<ArrayAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
