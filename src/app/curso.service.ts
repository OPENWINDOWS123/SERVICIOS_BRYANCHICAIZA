import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos: any[] = []; // Cambia 'any' por una interfaz si tienes definida

  // Método para agregar un curso
  addCurso(curso: any) {
    this.cursos.push(curso);
  }

  // Método para obtener la lista de cursos
  getCursos() {
    return this.cursos;
  }

  // Método para eliminar un curso por índice
  removeCurso(index: number) {
    this.cursos.splice(index, 1);
  }
}
