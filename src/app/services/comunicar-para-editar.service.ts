import { EventEmitter, Injectable, Output } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class ComunicarParaEditarService {

  private empleadoParaEditar: Empleado = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    telefono: 0
  }

  constructor() { }

  modificarEmpleado(empleado: Empleado){
    this.empleadoParaEditar = empleado;
  }

  obtenerEmpleado(){
    return this.empleadoParaEditar;
  }
}
