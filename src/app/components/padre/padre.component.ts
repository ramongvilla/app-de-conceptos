import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../servicios/task.service';

//importar clase
import { Concepto } from '../../core/clases/concepto';
import { ServiciosService } from 'src/app/core/servicios/servicios.service';
import { Country } from 'src/app/core/interfaces/country';
import { ConceptoService } from 'src/app/core/servicios/concepto.service';
@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {
  
  tabs: string[] = ['HTML', 'CSS', 'TypeScript'];
  hola= 'guardar';
  accion = "fdsgg";



  neta(){
    this.hola='guardar';
  }
 
  tab_concepto1 = new Concepto;


  tab_concepto = {
    titulo: 'HTML',
    contenido: [
      {
        concepto: '<p></p>',
        descripcion:'párrafos de texto de nuestro documento'
      },
      {
        concepto: '<br>',
        descripcion:'Escipion'
      }
    ],
    
  }
  
  public valores: {titulo: string,color: string}[    ];
    constructor(public taskService: TaskService, public conceptoService: ConceptoService) {
      
   
      
     this.valores=[ { titulo:"HTML", color:"inicio_buton"},
      {titulo:"CSS",color:"centro_button"},
      {titulo:"TYPESCRIPT",color:"fin_button"} ];
    }



    detalle() {
      //this.accion = "guardarpadre"

      this.tab_concepto1 = {
        etiqueta: '',
        descripcion: '',
        type: 'Seleccione',
        editado: false
      }
      
      this.conceptoService.enviarMensaje(this.tab_concepto1);
      this.conceptoService.PasarAccion('Guardar');
      console.log(this.tab_concepto1);
  
    }
    aver(user) {
      for (let i = 0; i < this.tabs.length; i++) {
       // let greaterTen2 = this.tabs.filter(this.tabs => this.tabs.='HTML');




        if (user == 'HTML') {
          console.log(this.tabs);
          this.tab_concepto.titulo = 'Conceptos HTML';
          this.tab_concepto.contenido[0].concepto = "<p></p>";
          this.tab_concepto.contenido[0].descripcion = "párrafos de texto de nuestro documento";
          this.tab_concepto.contenido[1].concepto = "<br>";
          this.tab_concepto.contenido[0].descripcion = "Un salto de línea simple";
          //console.log(this.conc.html[0].concepto);
        }
        else if (user == this.tabs[1]) {
          this.tab_concepto.titulo = 'Conceptos CSS';        
          this.tab_concepto.contenido[0].concepto = "Layout";
          this.tab_concepto.contenido[0].descripcion = "entorno de diseño, es donde se maqueta y ordena todos los elementos que componen una página web";
          this.tab_concepto.contenido[1].concepto = "Border";
          this.tab_concepto.contenido[0].descripcion = "define el borde de un elemento, su color, estilo y grosor";
          console.log(user);
        }
        else if (user == 'TYPESCRIPT') {
          this.tab_concepto.titulo = 'Conceptos TypeScript';
          this.tab_concepto.contenido[0].concepto = "Componente:";
          this.tab_concepto.contenido[0].descripcion = "bloque de código reutilizable, consta de 3 archivos: CSS, HTML  y un TypeScript.";
          this.tab_concepto.contenido[1].concepto = "Servicio";
          this.tab_concepto.contenido[0].descripcion = "proveedor de datos, que mantiene lógica de acceso a ellos y operativa relacionada";
          console.log(user);
        }
  
      }
    }
    


  /*
  tab_concepto = {
    titulo: 'HTML',
    contenido: [
      {
        concepto: '<p></p>',
        descripcion:'párrafos de texto de nuestro documento'
      },
      {
        concepto: '<br>',
        descripcion:'Escipion'
      }
    ],
    
  }
 
    

  

  

  
   tabs: string[] = ['HTML', 'CSS', 'TypeScript'];
  colores: string[] = ['red', 'blue', 'black'];

  holaa: string []=[];

public style ={
  background: 'red'
  };

  hola (){
    this.style.background = "";
  }

  public valores: {titulo: string,color: string}[    ];
  //public arrayDeValues: valores[];
  
 
    
    

  aver(user) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (user == 'HTML') {
        console.log(this.tabs);
        this.tab_concepto.titulo = 'Estoy en html';
        this.tab_concepto.contenido[0].concepto = "<p></p>";
        this.tab_concepto.contenido[0].descripcion = "párrafos de texto de nuestro documento";
        this.tab_concepto.contenido[1].concepto = "<br>";
        this.tab_concepto.contenido[0].descripcion = "Un salto de línea simple";
        //console.log(this.conc.html[0].concepto);
      }
      else if (user == this.tabs[1]) {
        this.tab_concepto.titulo = 'Estoy en css';        
        this.tab_concepto.contenido[0].concepto = "Layout";
        this.tab_concepto.contenido[0].descripcion = "entorno de diseño, es donde se maqueta y ordena todos los elementos que componen una página web";
        this.tab_concepto.contenido[1].concepto = "Border";
        this.tab_concepto.contenido[0].descripcion = "define el borde de un elemento, su color, estilo y grosor";
        console.log(user);
      }
      else if (user == 'TYPESCRIPT') {
        this.tab_concepto.titulo = 'Estoy en Typescript';
        this.tab_concepto.contenido[0].concepto = "Componente:";
        this.tab_concepto.contenido[0].descripcion = "bloque de código reutilizable, consta de 3 archivos: CSS, HTML  y un TypeScript.";
        this.tab_concepto.contenido[1].concepto = "Servicio";
        this.tab_concepto.contenido[0].descripcion = "proveedor de datos, que mantiene lógica de acceso a ellos y operativa relacionada";
        console.log(user);
      }

    }
  }
  constructor() {
    //this.concepto_html;
    //this.color=['primary', 'warning','success'];
    this.valores=[ { titulo:"HTML", color:"inicio_buton"},
    {titulo:"CSS",color:"centro_button"},
    {titulo:"TYPESCRIPT",color:"fin_button"} ];


  }

  ngOnInit(): void {
  }

  */



ngOnInit(): void {
}

}
