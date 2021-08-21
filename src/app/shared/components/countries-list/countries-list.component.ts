import { Component, OnInit, ViewChild } from '@angular/core';
import { Country } from 'src/app/core/interfaces/country';
import { ServiciosService } from 'src/app/core/servicios/servicios.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  TITULOS = [{
    label: "Etiqueta", prop: "etiqueta"
  }, { label: "Descripción", prop: "descripcion" }, { label: "Tipo", prop: "type" }];

  DATA = [{ etiqueta: "<div>", descripcion: "es una etiqueta...", type: "html" },
  { etiqueta: "<br>", descripcion: "es otra etiqueta...", type: "html" }];












  countries: Country;
  //@ViewChild('countries')
 
  constructor(private servicios: ServiciosService) {
    this.servicios.getCountries()
      .subscribe((resp) => {
        this.countries = resp;
        //console.log('espy aquiggg', this.Countries1);
      });
  }

  ngOnInit(): void {
  }

}
