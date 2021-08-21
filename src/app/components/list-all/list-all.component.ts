import { Component, Input, OnInit } from '@angular/core';
import { Concepto } from 'src/app/core/clases/concepto';
import { ConceptoService } from 'src/app/core/servicios/concepto.service';
import { TaskService } from 'src/app/servicios/task.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {

  @Input() data:any;

  TITULOS = [
    { label: "Etiqueta", prop: "etiqueta" },
    { label: "Descripción", prop: "descripcion" },
    { label: "Tipo", prop: "type" },
    { label: "Acciones", prop: "acciones" }]

 //DATA = [{ etiqueta: "<div>", descripcion: "es una etiqueta...", type: "html" },
  //{ etiqueta: "<br>", descripcion: "es otra etiqueta...", type: "html" }]

 DATA: Concepto[];



  constructor(public conceptoService: ConceptoService) { }

  ngOnInit(): void {

   this.DATA = this.conceptoService.getConcepto();
  }

}
