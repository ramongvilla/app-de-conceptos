import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../servicios/task.service';
import { Task } from '../../models/Task';

//importamos la clase
import { Concepto } from '../../core/clases/concepto'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConceptoService } from 'src/app/core/servicios/concepto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  hola = new Concepto;




  createFormGroup() {
    return new FormGroup({
      etiqueta: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(25)])
    })
  }

  conceptoForm: FormGroup;

  get etiqueta() { return this.conceptoForm.get('etiqueta'); }




  addConcepto(new_etiqueta: HTMLInputElement, new_descripcion: HTMLInputElement, new_tipo: HTMLInputElement) {

    
    console.log('si llegaaaaaaaaaaa');
    //console.log('si o no homsss',new_etiqueta.value, new_descripcion.value,new_tipo.value);
    this.conceptoService.addConcepto({
      etiqueta: new_etiqueta.value,
      descripcion: new_descripcion.value,
      type: new_tipo.value,
      editado: false
    })

    new_etiqueta.value = '';
    new_descripcion.value = '';
    new_tipo.value = 'Seleccione';
    new_etiqueta.focus();

    return false;
  }



  updateConcepto(new_etiqueta: HTMLInputElement, new_descripcion: HTMLInputElement, new_tipo: HTMLInputElement) {
    //console.log('si o no homsss',new_etiqueta.value, new_descripcion.value,new_tipo.value);

    let editado_: boolean = true;

    this.conceptoService.updateConcepto({
      etiqueta: new_etiqueta.value,
      descripcion: new_descripcion.value,
      type: new_tipo.value,
      editado: editado_



    });

    new_etiqueta.value = '';
    new_descripcion.value = '';
    new_tipo.value = 'Seleccione';
    new_etiqueta.focus();

    return false;
  }


  constructor(public taskService: TaskService, public conceptoService: ConceptoService) { 
    
  }
  ngOnInit(): void {

    console.log('si llega', this.conceptoService.mensaje.type);

  }
}
