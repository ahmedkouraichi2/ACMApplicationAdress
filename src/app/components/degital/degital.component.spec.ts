import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegitalComponent } from './degital.component';

describe('DegitalComponent', () => {
  let component: DegitalComponent;
  let fixture: ComponentFixture<DegitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegitalComponent]
    });
    fixture = TestBed.createComponent(DegitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
