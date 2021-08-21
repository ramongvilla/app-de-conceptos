import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../servicios/task.service';
import { Task } from '../../models/Task';
//importamos la clase

import { Concepto } from '../../core/clases/concepto';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  //tasks: Task[];
  conceptos: Concepto[]



  

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    //this.conceptos=this.taskService.Concepto;
    
  }

}
