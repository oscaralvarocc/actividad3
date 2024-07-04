import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-buscador',
  standalone: true,
  imports: [CardproductoTarjetaComponent,CommonModule],
  templateUrl: './card-buscador.component.html',
  styleUrl: './card-buscador.component.css'
})
export class CardBuscadorComponent implements OnInit {

  productos: any[]=[];
  termino:string='';
  constructor(private activateRoute:ActivatedRoute,
    private _productosService:ProductosService  ){
    }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.termino=params['termino'];
     this.productos= this._productosService.buscarProductos(this.termino);
console.log(this.productos);
    });
  }

}
