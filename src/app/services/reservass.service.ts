import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReservaParams } from '../models/procedureparam';
import { DatePipe } from '@angular/common';
import { ReservaModel } from '../models/reservaModel.models';

const apiUlr = 'https://disweb.jokamaliva.com/jrc/';

@Injectable({ providedIn: 'root' })
export class Spaciente {
  constructor(private http: HttpClient, private datepipe: DatePipe) { }

  selReserva(procedureParam: ReservaParams): Observable<any> {
    const body = new HttpParams()
      .set('idusuario', '1')
      .set('llave', '2')
      .set(procedureParam.pCampo0, procedureParam.pValor0)
      .set(procedureParam.pCampo1, procedureParam.pValor1)
      .set(procedureParam.pCampo2, procedureParam.pValor2)
      .set(procedureParam.pCampo3, procedureParam.pValor3)
      .set(procedureParam.pCampo4, procedureParam.pValor4)
      .set(procedureParam.pCampo5, procedureParam.pValor5)
      .set(procedureParam.pCampo6, procedureParam.pValor6)
      .set(procedureParam.pCampo7, procedureParam.pValor7);

    return this.http.post(apiUlr + 'selreserva', body)
      .pipe(map((resp: any) => {
        console.log(resp);
        if (resp['info'] != null && resp['info'].item != null) {
          return resp['info'].item;
        } else {
          console.error('Error al obtener la reserva');
          return null;
        }
      }));
  }

  addReserva(reserva: ReservaModel): Observable<any> {
    const body = new HttpParams()
      .set('idreservas', reserva.idreservas.toString())
      .set('nombrereserva', reserva.nombrereserva.toString())
      .set('fechareserva', this.datepipe.transform(reserva.fechareserva, 'yyyy-MM-dd') || '')
      .set('horareserva', reserva.horareserva.toString())
      .set('numpersonas', reserva.numpersonas.toString())
      .set('estado', reserva.estado.toString())
      .set('fecharegistro', this.datepipe.transform(reserva.fecharegistro, 'yyyy-MM-dd') || '')
      .set('estadoregistro', reserva.estadoregistro.toString());

    return this.http.post(apiUlr + 'addreserva', body)
      .pipe(map((resp: any) => {
        console.log(resp);
        if (resp['info'] != null && resp['info'].item != null) {
          return resp['info'].item;
        } else {
          console.error('Error al agregar la reserva');
          return null;
        }
      }));
  }
}
