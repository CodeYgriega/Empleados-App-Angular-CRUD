import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private empleados: Empleado[] = [
    {
      nombre: "Carlitos",
      apellido: "Balá",
      email: "carlitos@gmail.com",
      telefono: 23255434}
  ];

  empleadosFiltrados: Empleado[] = [];

  constructor() { }

  obtenerEmpleados(){
    return this.empleados;
  }

  agregarEmpleado(empleado: Empleado){
    return this.empleados.push(empleado);
  }

  eliminarEmpleados(nombre: string){
    this.empleadosFiltrados = this.empleados.filter(persona => {
      return persona.nombre !== nombre;
    })
    this.empleados = this.empleadosFiltrados;
  }
}
