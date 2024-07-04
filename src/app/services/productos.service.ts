import { Injectable } from "@angular/core";
import { Producto } from "../models/producto.models";
@Injectable({providedIn: 'root'})

export class ProductosService{
    constructor(){
        console.log('servicio listo para usar!!!');
    }
    private productos: Producto[] = [
        {nombre:"Audifonos",img:"assets/img/1audi.jpg",precio:100},
        {nombre:"Tenis",img:"assets/img/2tenis.jpg",precio:200},
        {nombre:"Reloj",img:"assets/img/3reloj.jpg",precio:300},
    ];
    //nombre del metodo : objeto que retorna
    getProductos(): Producto[]{
        return this.productos;
    }
    
    //devuelve un producto por id
    getProducto(id:number){
        return this.productos[id];
    }
    //buscamos productos por un parametro
    buscarProductos(termino:string):Producto[]{
        let productosArr: Producto[]=[];
        termino=termino.toLowerCase();
        for(let i=0; i<this.productos.length;i++){
            let producto=this.productos[i];
            let nombre=producto.nombre.toLowerCase();
            if(nombre.indexOf(termino)>=0){
                productosArr.push(producto)
            }
        }
        return productosArr;
    }
}