import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, State, City } from '../../core/interfaces/country';
import { ServiciosService } from '../../core/servicios/servicios.service';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.scss']
})
export class ProfileFeedComponent implements OnInit {
  @Input()
  countries_;
  states;
  activo:string= 'Paises';
  cities;

  aver = [{
    "country_name": "Afghanistan",
  
  }];

  seleccion(hola: Country) {
    //console.log('Pais seleccionado', hola);    
    //console.log('jsjs',hola.country_name);
    this.ApiRest.prueba(hola.country_name);

    this.ApiRest.getStates()
    .subscribe((resp)=> {
     this.states = resp;
      console.log('estados', resp);
    });
  }


  seleccionCity(hola: State) {
    //console.log('Pais seleccionado', hola);  
    this.ApiRest.City(hola.state_name);
    
    console.log('jsjs',hola.state_name);
    this.ApiRest.getCities()
    .subscribe((resp)=>{
      this.cities = resp;
    })
  
  }




  constructor(public ApiRest: ServiciosService) { }

  ngOnInit(): void {

  }

}
