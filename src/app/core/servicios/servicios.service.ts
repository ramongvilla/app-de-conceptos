import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country, State, City } from '../../core/interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  //req = ("GET", "https://www.universal-tutorial.com/api/getaccesstoken");eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyYW1vbmcucnYxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Imozbl8yRlJ6ODBoaTY2TFNVQ0ZhZ1RKVktScFh1S2V2RXRDZ00xODZTczJVNlJxc2gzX3Q5TFVDbjI2d2pad3hPRzgifSwiZXhwIjoxNjIwODM1NzY4fQ.uY8Esb2_Lrh9QNQMgGIvaoAl9ec4_XuGd7Cov8GAWW4
  pais = 'México';
  city = '';
prueba (p){

  this.pais=p;
  console.log(p)   
}


City (c){

  this.city=c;
  console.log('si llego',c)   
}

  obtenerCountries() {

    const headers = new HttpHeaders({
   /*  
      "Accept": "application/json",
      "api-token": "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ",
      "user-email": "ramong.rv1@gmail.com"
   */
    });

    return this.http.get('https://www.universal-tutorial.com/api/getaccesstoken', { headers });
  }














  
  getCountries() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyYW1vbmcucnYxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Imozbl8yRlJ6ODBoaTY2TFNVQ0ZhZ1RKVktScFh1S2V2RXRDZ00xODZTczJVNlJxc2gzX3Q5TFVDbjI2d2pad3hPRzgifSwiZXhwIjoxNjIxNTg4NTg4fQ.Vm3YWcC1GIvMRR04QIdisrBKemo6n3pTR3Jduhaad5Y",
      "Accept": "application/json"
    });

    return this.http.get<Country>('https://www.universal-tutorial.com/api/countries/', { headers });
  }

  getStates(){
    const headers = new HttpHeaders({
     // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyYW1vbmcucnYxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Imozbl8yRlJ6ODBoaTY2TFNVQ0ZhZ1RKVktScFh1S2V2RXRDZ00xODZTczJVNlJxc2gzX3Q5TFVDbjI2d2pad3hPRzgifSwiZXhwIjoxNjIxNTg4NTg4fQ.Vm3YWcC1GIvMRR04QIdisrBKemo6n3pTR3Jduhaad5Y",
      "Accept": "application/json"
    });

    return this.http.get<State>('https://www.universal-tutorial.com/api/states/'+this.pais, { headers });

  }

  getCities(){
    const headers = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyYW1vbmcucnYxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Imozbl8yRlJ6ODBoaTY2TFNVQ0ZhZ1RKVktScFh1S2V2RXRDZ00xODZTczJVNlJxc2gzX3Q5TFVDbjI2d2pad3hPRzgifSwiZXhwIjoxNjIxNTg4NTg4fQ.Vm3YWcC1GIvMRR04QIdisrBKemo6n3pTR3Jduhaad5Y",
      "Accept": "application/json"
    });

    return this.http.get<City>('https://www.universal-tutorial.com/api/cities/'+this.city, { headers });

  }




  obtenerCountries1() {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/region/americas');
  }

  getCountriesCodes(codes: string[]) {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/alpha?codes=col;no;ee'

    )
  }

  
}
