import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {path:"listado", component: ListadoComponent},
  {path:"agregar-empleado", component: AgregarEmpleadoComponent},
  {path:"editar-empleado", component: EditarEmpleadoComponent},
  {path:"", redirectTo: "listado", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
