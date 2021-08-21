import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../servicios/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
 @Input()  textoPadre: string;

 


 tab_concepto = {
  etiqueta: '',
  descripcion:'',
  tipo: 'HTML'
  
}
  
 vaciarTask(task: Task) {
  //this.hola=this.taskService.Concepto;
  //this.tasks.push() = this.taskService.VaciarTask(task);
  this.tab_concepto.descripcion=task.descripcion;
  console.log(this.tab_concepto.descripcion);


  
  
  


  



}

 

  addTask(new_etiqueta: HTMLInputElement, new_descripcion: HTMLInputElement, new_tipo: HTMLInputElement) {
    //console.log('si o no homsss',new_etiqueta.value, new_descripcion.value,new_tipo.value);
    this.taskService.addTask({
      etiqueta: new_etiqueta.value,
      descripcion: new_descripcion.value,
      type: new_tipo.value,
      editado: false
    })

    new_etiqueta.value = '';
    new_descripcion.value = '';
    new_tipo.value = 'Seleccione';
    new_etiqueta.focus();

    //console.log(this.taskService.Concepto);
    return false;
  }



  constructor(public taskService: TaskService) {
   
    

  }

  ngOnInit(): void {
  }

}
