import { Component, Input, OnInit, Output } from '@angular/core';


//importar clase
import { Concepto } from '../../core/clases/concepto';
//importar servicos
import { ConceptoService } from 'src/app/core/servicios/concepto.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  //  declaramos un arreglo de  tipo concepto
  conceptos: Concepto[];
  constructor(public conceptoService: ConceptoService) { }

  deleteConcepto(concepto: Concepto) {
    this.conceptoService.deleteConcepto(concepto);
  }

  editConcepto(concepto: Concepto) {
    this.conceptoService.enviarMensaje(concepto);
    this.conceptoService.PasarAccion("Guardar Cambios");
    this.conceptoService.actConcepto(concepto);
  }

  detalle(concepto) {
    this.conceptoService.enviarMensaje(concepto);
  }

  ngOnInit(): void {
    this.conceptos = this.conceptoService.getConcepto();
  }

}
