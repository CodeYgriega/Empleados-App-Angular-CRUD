import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.traerEmpleados();
  }

  traerEmpleados(){
    return this.empleados = this.service.obtenerEmpleados();
  }
  
  eliminarEmpleado(nombre: string){
    this.service.eliminarEmpleados(nombre);
    this.traerEmpleados();
  }
}
