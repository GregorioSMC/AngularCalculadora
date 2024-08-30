import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDisplayComponent } from './calculadora-display.component';

describe('CalculadoraDisplayComponent', () => {
  let component: CalculadoraDisplayComponent;
  let fixture: ComponentFixture<CalculadoraDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
