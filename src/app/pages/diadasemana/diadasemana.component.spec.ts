import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiadasemanaComponent } from './diadasemana.component';

describe('DiadasemanaComponent', () => {
  let component: DiadasemanaComponent;
  let fixture: ComponentFixture<DiadasemanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiadasemanaComponent]
    });
    fixture = TestBed.createComponent(DiadasemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
