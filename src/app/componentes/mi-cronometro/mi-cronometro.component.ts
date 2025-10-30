import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CronometroService } from '../../servicios/cronometro.service';
 // o .ts si no lo has renombrado

@Component({
  selector: 'app-mi-cronometro',  
  templateUrl: './mi-cronometro.component.html',
  styleUrls: ['./mi-cronometro.component.css']
})
export class MiCronometroComponent implements OnDestroy {
  tiempoActual = 0;
  suscripcion?: Subscription;

  constructor(private cronometroService: CronometroService) {}

  empezar() {
    if (this.suscripcion) return;

    const observable = this.cronometroService.crearObservableCronometro();
    this.suscripcion = observable.subscribe((valor: number) => {
      this.tiempoActual = valor;
    });
  }

  reiniciar() {
    this.tiempoActual = 0;
    this.suscripcion?.unsubscribe();
    this.suscripcion = undefined;
  }

  ngOnDestroy() {
    this.suscripcion?.unsubscribe();
  }
}
