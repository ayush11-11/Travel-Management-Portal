import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetUserComponent } from './forget-user.component';

describe('ForgetUserComponent', () => {
  let component: ForgetUserComponent;
  let fixture: ComponentFixture<ForgetUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
