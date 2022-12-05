import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Carrito } from './../models/carrito';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  lstproductoACompra: Carrito[] = [];
  totalAPagar: number = 0.0;

  constructor(private http: HttpClient) { }

  agregaProductoACompra(){

  }
}
