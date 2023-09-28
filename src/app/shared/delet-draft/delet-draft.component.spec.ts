import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletDraftComponent } from './delet-draft.component';

describe('DeletDraftComponent', () => {
  let component: DeletDraftComponent;
  let fixture: ComponentFixture<DeletDraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletDraftComponent]
    });
    fixture = TestBed.createComponent(DeletDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
