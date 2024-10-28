import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css'] // Corrección aquí
})
export class CursoFormComponent {
  nombre: string = '';
  descripcion: string = '';

  fecha: string = '';      // Campo para la fecha
  duracion: number | null = null; // Campo para la duración en semanas

  constructor(private cursoService: CursoService) { }

  onSubmit() {
    if (this.nombre && this.descripcion  && this.fecha && this.duracion) {
      const nuevoCurso = {
        nombre: this.nombre,
        descripcion: this.descripcion,
      
        fecha: this.fecha,
        duracion: this.duracion
      };
      this.cursoService.addCurso(nuevoCurso);
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.descripcion = '';
  
    this.fecha = '';
    this.duracion = null;
  }
}