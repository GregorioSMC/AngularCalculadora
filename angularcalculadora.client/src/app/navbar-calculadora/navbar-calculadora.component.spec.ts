import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCalculadoraComponent } from './navbar-calculadora.component';

describe('NavbarCalculadoraComponent', () => {
  let component: NavbarCalculadoraComponent;
  let fixture: ComponentFixture<NavbarCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
