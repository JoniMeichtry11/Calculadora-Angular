import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operando',
  templateUrl: './operando.component.html',
  styleUrls: ['./operando.component.css']
})
export class OperandoComponent{
  operandoA: number;
  operandoB: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
}
