import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CronometroService {

  crearObservableCronometro(): Observable<number> {
    return new Observable<number>(observer => {
      let tiempo = 0;

      const intervalo = setInterval(() => {
        tiempo++;
        observer.next(tiempo);
      }, 1000);

      // Limpieza al cancelar la suscripción
      return () => clearInterval(intervalo);
    });
  }
}
