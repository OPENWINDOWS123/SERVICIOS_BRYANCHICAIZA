import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medio',
  standalone: true,
  imports: [NgIf],
  templateUrl: './medio.component.html',
  styleUrl: './medio.component.css'
})
export class MedioComponent {
  
    // Propiedades para el proceso
    step: number = 1;
    steps: string[] = [
      '¡Bienvenido al viaje mágico!',
      'Aquí aprenderás cosas increíbles.',
      '¡Prepárate para desbloquear tu potencial!',
      'El conocimiento es poder. ¡Vamos por más!'
    ];
  
    nextStep() {
      if (this.step < this.steps.length) {
        this.step++;
      }
    }
}
