import { Component, OnInit } from '@angular/core';
import { ComunicarParaEditarService } from 'src/app/services/comunicar-para-editar.service';
import { Empleado } from 'src/app/models/empleado';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {

  formEditar: FormGroup;

  empleadoObtenido: Empleado = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    telefono: 0
  }

  constructor(private comunicarService: ComunicarParaEditarService, private formBuilder: FormBuilder, private service: AppService, private router: Router) {
    this.formEditar = this.formBuilder.group({
      id: [""],
      nombre: [""],
      apellido: [""],
      email: [""],
      telefono: [""]
    })
  }

  ngOnInit(): void {
    this.recibirEmpleadoParaEditar();
    this.buildForm();
  }

  buildForm(){
    this.formEditar = this.formBuilder.group({
      id: [this.empleadoObtenido.id],
      nombre: [this.empleadoObtenido.nombre],
      apellido: [this.empleadoObtenido.apellido],
      email: [this.empleadoObtenido.email],
      telefono: [this.empleadoObtenido.telefono]
    })
  }

  recibirEmpleadoParaEditar(){
    this.empleadoObtenido = this.comunicarService.obtenerEmpleado();
  }

  enviarEmpleadoEditado(){
    return this.service.agregarEmpleado(this.formEditar.value).subscribe(data => {
      alert("El empleado ha sido actualizado correctamente!");
      this.router.navigate(["listado"]);
    });
  }
}