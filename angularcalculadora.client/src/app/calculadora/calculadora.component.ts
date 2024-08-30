import { Component } from '@angular/core';
import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  operacion: string = 'suma';
  resultado: number | undefined;
  mensajeError: string | undefined;
  selectedOption: string = '';
  isDisabled: boolean = false;
  constructor(private calculadoraService: CalculadoraService) { }

  calcular(): void {
    this.calculadoraService.operar(this.numero1, this.numero2, this.operacion).subscribe(response => {
      this.resultado = response.resultado;
      this.mensajeError = undefined;
    }, error => {
      this.resultado = undefined;
      this.mensajeError = error.error;
    });
  }

  onOptionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.numero2 = 0;
    this.isDisabled = selectedValue === 'factorial';
  }

}
