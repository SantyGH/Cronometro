import { Component } from '@angular/core';
import { MiCronometroComponent } from './componentes/mi-cronometro/mi-cronometro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiCronometroComponent],  // ✅ Importamos tu componente aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'cronometro-observable';
}
