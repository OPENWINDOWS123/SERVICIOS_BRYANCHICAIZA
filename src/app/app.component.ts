import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CursoFormComponent } from "./curso-form/curso-form.component";
import { CursoListaComponent } from "./curso-lista/curso-lista.component";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { InicioComponent } from "./pages/inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursoFormComponent, CursoListaComponent, FormsModule, NgFor, RouterModule, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nombre-del-proyecto';
 
}
