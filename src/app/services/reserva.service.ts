import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://tu-api-url/api/reservas';

  constructor(private http: HttpClient) { }

  createReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reserva);
  }
}
