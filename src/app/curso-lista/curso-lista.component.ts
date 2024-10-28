import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

interface Curso {
  nombre: string;
  descripcion: string;
  profesor: string ;   // Campo para el profesor
  fecha: string ;      // Campo para la fecha
  duracion: number | null ; // Campo para la duración en semanas

}

@Component({
  selector: 'app-curso-lista',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf,CommonModule,RouterModule,RouterOutlet],
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css'] // Corrección aquí
})
export class CursoListaComponent implements OnInit {
  cursos: Curso[] = []; // Tipado mejorado
  modoModificar: boolean = false;
  TIT_fecha: string ="FECHA INICIO:" ;  
  TIT_duracion:string="DURACION (SEMANAS):";
  TIT_CALCULADORA:string="CALCULADORA PARA TAREAS:";

  a=0
  b=0
  c=0


  cursoSeleccionado: Curso | null = null;
  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void {
    try {
      this.cursos = this.cursoService.getCursos();
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
      // Aquí podrías manejar el error de forma más amigable para el usuario
    }
    

  }


  sumar(){
    this.c= this.a + this.b
  }

  resta(){
    this.c= this.a - this.b
  }

  mul(){
    this.c= this.a * this.b
  }

  div(){
    this.c= this.a / this.b
  }


   eliminarCurso(index: number): void {
    this.cursoService.removeCurso(index); // Llama al servicio para eliminar
    this.cargarCursos(); // Recarga la lista de cursos
  }
  verDetalles(curso: Curso): void {
    this.cursoSeleccionado = curso; // Almacena el curso seleccionado
  }

  cerrarDetalles(): void {
    this.cursoSeleccionado = null; // Limpia la selección
     // Resetear el modo
  }
  calcularFechaFinal(fecha: string, duracion: number | null): Date {
    const fechaInicio = new Date(fecha);
    const fechaFinal = new Date(fechaInicio);
    if (duracion) {
      fechaFinal.setDate(fechaFinal.getDate() + (duracion * 7));
    }
    return fechaFinal;
  }
  modificarCurso(index: number, cursoActualizado: Partial<Curso>): void {
    if (cursoActualizado) {
      this.cursoService.updateCurso(index, cursoActualizado as CursoService);
      this.cargarCursos(); // Recargar la lista de cursos
    }
}
prepararModificacion(curso: Curso): void {
  this.cursoSeleccionado = { ...curso }; // Hacer una copia para evitar modificaciones directas
}

}