import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { VistaComponent } from './components/vista/vista.component';
import { ModalComponent } from './modal/modal.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

//rutas
import { app_routing } from './app.routes';

import { DetalleComponent } from './pages/detalle/detalle.component'

import { TaskService } from './servicios/task.service';
import { FormularioComponent } from './components/formulario/formulario.component';

import { ProfileInfoComponent } from './components/profile-info/profile-info.component';

import { SharedModule } from './shared/shared.module';
import { ProfileFeedComponent } from './components/profile-feed/profile-feed.component';



import { HttpClientModule } from '@angular/common/http';
import { ListAllComponent } from './components/list-all/list-all.component';
import { CeldaComponent } from './components/celda/celda.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    VistaComponent,
    ModalComponent,
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
    FormularioComponent,
    ProfileInfoComponent,
    DetalleComponent,
    ProfileFeedComponent,
    ListAllComponent,
    CeldaComponent
   
    



  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
