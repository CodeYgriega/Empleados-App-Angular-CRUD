import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiURL = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  obtenerEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.apiURL}/api/empleados`);
  }

  agregarEmpleado(empleado: any){
    return this.http.post(`${this.apiURL}/api/nuevo-empleado`, empleado);
  }

  eliminarEmpleado(id: number){
    return this.http.delete(`${this.apiURL}/api/eliminar-empleado/${id}`);
  }
}
