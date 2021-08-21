import { Component, OnInit, Input } from '@angular/core';
import { ConceptoService } from 'src/app/core/servicios/concepto.service';
import { Task } from '../../models/Task';
import { TaskService } from '../../servicios/task.service';


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  //obtenemos los datos para pasarlos al form

  constructor(public conceptoService: ConceptoService) {

    console.log('hola',conceptoService.mensaje.descripcion);



  }

  ngOnInit(): void {






  }

}
