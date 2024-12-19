import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,  // Marca este componente como Standalone
  imports: [CommonModule, IonicModule, FormsModule],  // Importar dependencias necesarias
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim()); // Agregar tarea a la lista
      this.newTask = ''; // Limpiar el campo de entrada
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Eliminar tarea de la lista
  }
}
