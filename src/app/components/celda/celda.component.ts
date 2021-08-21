import { Component, Input, OnInit } from '@angular/core';
import { Concepto } from 'src/app/core/clases/concepto';
import { ConceptoService } from 'src/app/core/servicios/concepto.service';


@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.scss']
})
export class CeldaComponent implements OnInit {
  @Input() infoCelda;
  @Input() conceptoRenglon;
  @Input() tituloColumna;

  constructor(public conceptoService: ConceptoService) {}

  editar(concepto: Concepto) {
    this.conceptoService.enviarMensaje(concepto);
    this.conceptoService.PasarAccion("Guardar Cambios");
    this.conceptoService.actConcepto(concepto);
  }

  eliminar(concepto: Concepto) {
    this.conceptoService.deleteConcepto(concepto);

    console.log(concepto);

  }


  ngOnInit(): void {
  }

}
