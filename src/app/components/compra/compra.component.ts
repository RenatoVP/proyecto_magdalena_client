import { Carrito } from './../../models/carrito';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  //Listamos los productos que son agregados
  public lstproductoAComprar: Carrito[] = [];
  totalAPagar: number = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

  //Logica Frontend
  public addProducto(){
    
  }

}
