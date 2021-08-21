import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msg: string = ''; 
  title = 'hola';
  opcion_seleccionada: string ='';

  tipo : string ='html';
    concepto  = {
      etiqueta: "p",
      descripcion: "es um parrafo"
    }

    constructor(){

     
  
      //this.grabar_localstorage();
      //this.obtener_localstorage();
    }
  
  
  



  selectChangerHandler (event:any){
    //se actualiza
    //this.opcion_seleccionada= event.target.value;
    //console.log(this.opcion_seleccionada= event.target.value);
    //return false;
  }

 


  grabar_localstorage(){
    let tipo : string = this.tipo;

    let concepto  = {

      etiqueta: this.concepto.etiqueta,
      descripcion: this.concepto.descripcion
    }

    localStorage.setItem("tipo",tipo);
    localStorage.setItem("concepto", JSON.stringify(concepto));  
  }

  obtener_localstorage(){
    let nombre = localStorage.getItem("tipo");
    let concepto = JSON.parse(localStorage.getItem("concepto"));
    console.log(nombre);
    console.log(concepto);
     
  }


}
