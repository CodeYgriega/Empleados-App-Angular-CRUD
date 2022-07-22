import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {

  empleadoNuevo: Empleado = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: NaN
  }

  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.enviarEmpleado();
} 

  enviarEmpleado(){
    return this.service.agregarEmpleado(this.empleadoNuevo).subscribe(data => {
      this.router.navigate(["listado"]);
    });
  }
}
