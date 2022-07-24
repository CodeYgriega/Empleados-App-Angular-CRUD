import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {

  form: FormGroup;

  constructor(private service: AppService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: [""],
      apellido: [""],
      email: [""],
      telefono: [""]
    })
  }

  ngOnInit(): void {
  } 
  
  enviarEmpleado(){
    return this.service.agregarEmpleado(this.form.value).subscribe(data => {
      alert("Empleado agregado con éxito!");
      this.router.navigate(["listado"]);
    });
  }
}
