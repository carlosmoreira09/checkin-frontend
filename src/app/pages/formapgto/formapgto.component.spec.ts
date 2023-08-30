import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapgtoComponent } from './formapgto.component';

describe('FormapgtoComponent', () => {
  let component: FormapgtoComponent;
  let fixture: ComponentFixture<FormapgtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormapgtoComponent]
    });
    fixture = TestBed.createComponent(FormapgtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
