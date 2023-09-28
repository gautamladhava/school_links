import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCustomComponent } from './auth-custom.component';

describe('AuthCustomComponent', () => {
  let component: AuthCustomComponent;
  let fixture: ComponentFixture<AuthCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthCustomComponent]
    });
    fixture = TestBed.createComponent(AuthCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
