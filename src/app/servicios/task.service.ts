import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { Console } from 'node:console';
import { Task } from '../models/Task';

//importamos la clase
import { Concepto } from '../core/clases/concepto'
import { conceptos } from '../core/interfaces/concepto.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];

  conceptos: Concepto[];

  constructor() {
    this.conceptos = [
      //{etiqueta: 'jaloooooooo', descripcion:'dsfg',tipo:'dsg'}
      //{etiqueta: 'gggggggggg', descripcion:'gggggggg',tipo:'gfgfg'}
    ]
  }
  //pasar datos con serviciois 
  // mensaje:string = 'a numa';
  mensaje = new Concepto;
  ///checar, cambiar el tipo de dato
  private enviarMensajeSubject = new Subject<conceptos>();
  envviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  actual: Concepto;

  enviarMensaje(mensaje) {
    this.actual = mensaje;
    this.mensaje = mensaje;
    // console.log('actual', mensaje);

    this.enviarMensajeSubject.next(mensaje);

  }

  // pasar parametro de
  accion: string;
  private pasarAaccionSubject = new Subject<string>();
  pasarAccionObsevable = this.pasarAaccionSubject.asObservable();

  PasarAccion(accion) {
    this.accion = accion;
    this.pasarAaccionSubject.next(accion);
  }
  ///aqui termina

  //cargamos la lista
  getConcepto() {

    if (localStorage.getItem('Conceptos') === null) {
      return this.conceptos;
    } else {
      this.conceptos = JSON.parse(localStorage.getItem('Conceptos'));
      return this.conceptos;
    }
  }


  /// agregamos datos
  addTask(concepto: Concepto) {
    this.conceptos.push(concepto);
    let conceptos: Concepto[] = [];
    if (localStorage.getItem('Conceptos') === null) {
      conceptos.push(concepto);
      localStorage.setItem('Conceptos', JSON.stringify(conceptos));
    } else {
      conceptos = JSON.parse(localStorage.getItem('Conceptos'));
      conceptos.push(concepto);
      localStorage.setItem('Conceptos', JSON.stringify(conceptos));

    }


  }

  //actualizar
   acc: Concepto;
  actConcepto(concepto: Concepto) {
    this.acc= concepto;
  }

  uptadaTask(concepto: Concepto) {
    console.log('viejo', this.acc);

    for (let i = 0; i < this.conceptos.length; i++) {
      if (this.acc == this.conceptos[i]) {
        this.conceptos[i]=this.mensaje;
       console.log(this.mensaje);
        localStorage.setItem('Conceptos', JSON.stringify(this.conceptos));
      }
    }


    //this.tasks[0]=task;
    /*for (let i = 0; i < this.tasks.length; i++) {
      if (mensaje == this.tasks[i]) {
        console.log('entra o ne');
        this.tasks[i].descripcion = task.descripcion;
        this.tasks[i].etiqueta = task.etiqueta;
        this.tasks[i].tipo = task.tipo;
        localStorage.setItem("etiqueta", JSON.stringify(this.tasks));

      }
    }


    //etiquetaFromLocalStorage[0].etiqueta = 'jihgv';

    // guarda el nuevoitem actalizado






    //localStorage.setItem('etiqueta', JSON.stringify(task));
*/
  }


  ///cargar formulario



  filtrarTask(task: Task) {




    let greaterTen2 = this.tasks.filter(task => task.tipo = 'HTML');
    console.log(greaterTen2);
  }
  //metodo para elimunar NO MOVER
  deleteTask(concepto: Concepto) {
    for (let i = 0; i < this.conceptos.length; i++) {
      if (concepto == this.conceptos[i]) {
        this.conceptos.splice(i, 1);
        localStorage.setItem('Conceptos', JSON.stringify(this.conceptos));
      }
    }

  }

  //vaciar
  VaciarTask(task: Task) {


    for (let i = 0; i < this.tasks.length; i++) {



      if (task == this.tasks[i]) {

        //task: [task.etiqueta, task.descripcion];
        return task;

        //console.log('hay vamos pa',task);


        //this.tasks.splice(i, 1);
        //localStorage.setItem('etiqueta', JSON.stringify(this.tasks));
      }
    }


  }

}
