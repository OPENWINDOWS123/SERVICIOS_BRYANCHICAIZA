import { Component } from '@angular/core';

@Component({
  selector: 'app-fin',
  standalone: true,
  imports: [],
  templateUrl: './fin.component.html',
  styleUrl: './fin.component.css'
})
export class FinComponent {
  mostrarMensaje() {
    alert('¡Gracias por participar! Tu viaje ha llegado a su fin.');
  }
}
