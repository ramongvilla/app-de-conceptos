import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TaskService } from '../../servicios/task.service';
import { Task } from '../../models/Task';
import { ServiciosService } from 'src/app/core/servicios/servicios.service';
import { Country } from 'src/app/core/interfaces/country';
import { Concepto } from 'src/app/core/clases/concepto';






@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {
  @Input() model2 = {
    etiqueta: '',
    descripcion: '',
    tipo: 'HTML'

  }
  countries: Country;
  conceptos: Concepto;


  TITULOS = [
    { label: "Etiqueta", prop: "etiqueta" },
    { label: "Descripción", prop: "descripcion" },
    { label: "Tipo", prop: "type" }]

  DATA = [{ etiqueta: "<div>", descripcion: "es una etiqueta...", type: "html" },
  { etiqueta: "<br>", descripcion: "es otra etiqueta...", type: "html" }]


  //DATA: Concepto[] ;

  constructor(private servicios: ServiciosService, private services: TaskService) {
    this.servicios.getCountries()
      .subscribe((resp) => {
        this.countries = resp;

        //console.log('espy aquiggg', this.Countries1);
      });
    //this.DATA = this.services.Concepto(); 
    // console.log(this.DATA[0].descripcion)
    /*
          for (let i = 0; i < this.TITULOS.length; i++) {
    
            if(this.TITULOS[i].prop== this.DATA[]){
            }
            console.log(this.TITULOS[i].prop)       
          }
    */






  }

















  /*
    addTask(new_etiqueta: HTMLInputElement, new_descripcion: HTMLInputElement, new_tipo: HTMLInputElement) {
      //console.log('si o no homsss',new_etiqueta.value, new_descripcion.value,new_tipo.value);
      this.taskService.addTask({
        etiqueta: new_etiqueta.value,
        descripcion: new_descripcion.value,
        tipo: new_tipo.value,
        editado: false
      })
  
      new_etiqueta.value = '';
      new_descripcion.value = '';
      new_tipo.value = 'Seleccione';
      new_etiqueta.focus();
  
      //console.log(this.taskService.Concepto;
      return false;
    }
  
    uptadaTask(new_etiqueta: HTMLInputElement, new_descripcion: HTMLInputElement, new_tipo: HTMLInputElement) {
      //console.log('si o no homsss',new_etiqueta.value, new_descripcion.value,new_tipo.value);
      /*
          this.taskService.uptadaTask({
            etiqueta: new_etiqueta.value,
            descripcion: new_descripcion.value,
            tipo: new_tipo.value
          })
      
          new_etiqueta.value = '';
          new_descripcion.value = '';
          new_tipo.value = 'Seleccione';
          new_etiqueta.focus();
      
          return false;
      
         
    }
   */
  ngOnInit(): void {
  }
}
