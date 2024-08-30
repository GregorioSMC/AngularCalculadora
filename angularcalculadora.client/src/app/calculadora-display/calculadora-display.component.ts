import { Component } from '@angular/core';
import { CalculadoraDisplayService } from './calculadora-display.service'

@Component({
  selector: 'app-calculadora-display',
  templateUrl: './calculadora-display.component.html',
  styleUrl: './calculadora-display.component.css'
})
export class CalculadoraDisplayComponent {

  numeroEntrada: string = '';
  numeroTemporal: number = 0;
  numero1: number = 0;
  numero2: number = 0;
  numeroTemp1: string = '';
  numeroTemp2: string = '';
  operacion: string = 'suma';
  resultado: number | undefined;
  mensajeError: string | undefined;
  selectedOption: string = '';
  flagCambioNumero: boolean = false;

  constructor(private calculadoraDisplayService: CalculadoraDisplayService) { }

  calcular(): void {

    this.numero1 = Number(this.numeroTemp1);
    this.numero2 = Number(this.numeroTemp2);

    

    this.calculadoraDisplayService.operar(this.numero1, this.numero2, this.operacion).subscribe(response => {
      this.resultado = response.resultado;
      this.mensajeError = undefined;
      this.numeroEntrada = String(this.resultado!);
    }, error => {
      this.resultado = undefined;
      this.mensajeError = error.error;
    });

    //this.reset();
  }


  reset() {

    this.numeroEntrada = '';
    this.numeroTemporal = 0;
    this.numero1 = 0;
    this.numero2 = 0;
    this.numeroTemp1 = '';
    this.numeroTemp2 = '';
    this.operacion = '';    
    this.selectedOption = '';
    this.flagCambioNumero = false;

  }

  asignarValor(event: Event){
    const elemento = event.target as HTMLElement;
    this.numeroEntrada += elemento.innerText;

    if (this.flagCambioNumero) {
      this.numeroTemp1 = this.numeroEntrada;
    }
    else {
      this.numeroTemp2 = this.numeroEntrada;
    }

  }

  calcularFactorial()
  {    
    const numeroAuxiliar = Number(this.numero1);
    this.numero1 = numeroAuxiliar;
    this.numero2 = 0;

    this.calculadoraDisplayService.operar(this.numero1, this.numero2, this.operacion).subscribe(response => {
      this.resultado = response.resultado;
      this.mensajeError = undefined;
      this.numeroEntrada = String(this.resultado!);
    }, error => {
      this.resultado = undefined;
      this.mensajeError = error.error;
    });
  }

  asignarOperacion(event: Event) {
    const elemento = event.target as HTMLElement;
    const operacionTemporal = elemento.innerText;
    switch (operacionTemporal)
    {
      case '+':
        this.operacion = 'suma';
        this.flagCambioNumero = true;
        this.numeroTemporal = 0;
        this.numeroEntrada = '';
        break;

      case '-':
        this.operacion = 'resta';
        this.flagCambioNumero = true;
        this.numeroTemporal = 0;
        this.numeroEntrada = '';
        break;
      case '*':
        this.operacion = 'multiplicacion';
        this.flagCambioNumero = true;
        this.numeroTemporal = 0;
        this.numeroEntrada = '';
        break;
      case '/':
        this.operacion = 'division';
        this.flagCambioNumero = true;
        this.numeroTemporal = 0;
        this.numeroEntrada = '';
        break;
      case 'F':
        this.operacion = 'factorial';
        this.flagCambioNumero = true;
        this.calcularFactorial();
        break;
    }
  }


}
