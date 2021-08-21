import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Concepto } from '../clases/concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {
  conceptos: Concepto[];
  constructor() { }

  addConcepto(concepto: Concepto) {
    // this.conceptos.push(concepto);
    console.log('aqio anda',concepto);
    
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

  getConcepto() {
    if (localStorage.getItem('Conceptos') === null) {
      return this.conceptos;
    } else {
      this.conceptos = JSON.parse(localStorage.getItem('Conceptos'));
      return this.conceptos;
    }
  }


  //actualizar
  acc: Concepto;
  actConcepto(concepto: Concepto) {
    this.acc = concepto;
  }

  updateConcepto(concepto: Concepto) {
    // for (let i = 0; i < this.conceptos.length; i++) {
    //   if (this.acc == this.conceptos[i]) {
    //     this.conceptos[i] = concepto;
    //     localStorage.setItem('Conceptos', JSON.stringify(this.conceptos));
    //   }
    // }
  }

  deleteConcepto(concepto: Concepto) {
    console.log('aqui', concepto)
    for (let i = 0; i < this.conceptos.length; i++) {
      if (concepto == this.conceptos[i]) {
        this.conceptos.splice(i, 1);
        localStorage.setItem('Conceptos', JSON.stringify(this.conceptos));
      }
    }

  }

  //pasar datos del renglon al modal
  mensaje = new Concepto;
  ///checar, cambiar el tipo de dato
  private enviarMensajeSubject = new Subject<Concepto[]>();
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

}
