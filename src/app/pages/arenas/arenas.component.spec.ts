import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenasComponent } from './arenas.component';

describe('ArenasComponent', () => {
  let component: ArenasComponent;
  let fixture: ComponentFixture<ArenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArenasComponent]
    });
    fixture = TestBed.createComponent(ArenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
