import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptoService } from './servicios/concepto.service';
import { Concepto } from './clases/concepto';
import { ServiciosService } from './servicios/servicios.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';




@NgModule({
  declarations: [
    
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
