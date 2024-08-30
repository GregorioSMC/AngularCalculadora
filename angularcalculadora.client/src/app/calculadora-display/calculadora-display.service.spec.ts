import { TestBed } from '@angular/core/testing';

import { CalculadoraDisplayService } from './calculadora-display.service';

describe('CalculadoraDisplayService', () => {
  let service: CalculadoraDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
