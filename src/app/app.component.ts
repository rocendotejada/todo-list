import { Component } from '@angular/core';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  standalone: true,  // Marca este componente como Standalone
  imports: [HomePage],  // Importar el componente principal
  template: `<app-home></app-home>`,
})
export class AppComponent {}
