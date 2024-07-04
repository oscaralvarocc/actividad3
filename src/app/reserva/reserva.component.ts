import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ReservaModel } from '../models/reservaModel.models';
import { Spaciente } from '../services/reservass.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservaModel: ReservaModel = new ReservaModel();

  constructor(private spaciente: Spaciente) { }

  ngOnInit(): void {
    console.log('Está en agregar reserva');
  }

  guardar(forma: NgForm) {
    this.spaciente.addReserva(this.reservaModel)
      .subscribe(() => {
        console.log('Se registró la reserva');
        Swal.fire({
          allowOutsideClick: false,
          title: 'Confirmación',
          text: 'Se registró la reserva correctamente',
        });
      }, error => {
        console.error('Error al agregar la reserva', error);
        Swal.fire({
          allowOutsideClick: false,
          title: 'Error',
          text: 'No se pudo agregar la reserva',
          icon: 'error'
        });
      });
  }
}
