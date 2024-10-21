import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    Component
  ],
  imports: [
    CommonModule, FormsModule,NgModule,

    RouterModule.forChild([
      { path: '', component: Component }
    ])
    
  ],
 
  exports: [
    Component
  ]
})
export class CarpetaModule { }
