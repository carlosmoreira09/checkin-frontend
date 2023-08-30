import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaoComponent } from './aulao.component';

describe('AulaoComponent', () => {
  let component: AulaoComponent;
  let fixture: ComponentFixture<AulaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AulaoComponent]
    });
    fixture = TestBed.createComponent(AulaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
