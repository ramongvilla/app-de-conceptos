import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HijoComponent } from './components/hijo/hijo.component'
import { PadreComponent} from './components/padre/padre.component';

const routes: Routes = [ 
    {path:'DetalleComponent',component: DetalleComponent},
    {path:'home1',component: HijoComponent},
    {path:'home',component: PadreComponent},
    {path: '**', pathMatch: 'full', redirectTo:'DetalleComponent'}
 ];
 

export const app_routing = RouterModule.forRoot(routes);