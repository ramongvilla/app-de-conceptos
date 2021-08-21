import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../core/servicios/servicios.service';
import { Country, State } from '../../core/interfaces/country';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  countries: Country;
  hola;
  states;
  
  constructor(private servicios: ServiciosService) {
 
  //
  this.servicios.obtenerCountries()
      .subscribe((resp) => {
        console.log('holaaaaaaa',resp);
                //console.log('espy aquiggg', this.Countries1);
      });


      this.servicios.getCountries()
      .subscribe((resp) => {
        this.countries = resp;
        //console.log('espy aquiggg', this.Countries1);
      });


      this.servicios.getStates()
      .subscribe((resp)=> {
       this.states = resp;
        console.log('estados', resp);
      });




  }
  //hola: Country[];
  ngOnInit(): void {
   


  }
}
