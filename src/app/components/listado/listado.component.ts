import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { AppService } from 'src/app/services/app.service';
import { ComunicarParaEditarService } from 'src/app/services/comunicar-para-editar.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  empleados: Empleado[] = [];
  
  constructor(private service: AppService, private comunicarService: ComunicarParaEditarService) { }

  ngOnInit(): void {
    this.traerEmpleados();
  }

  traerEmpleados(){
    return this.service.obtenerEmpleados().subscribe(data => {
      this.empleados = data;
    })
  }
  
  editarEmpleado(empleado: Empleado){
    return this.comunicarService.modificarEmpleado(empleado);
  }

  eliminarEmpleado(id: number){
    this.service.eliminarEmpleado(id).subscribe(data => {
      alert("El empleado ha sido eliminado correctamente.");
      this.traerEmpleados();
    });
  }
}
