import { Producto } from './producto';

export class Carrito extends Producto {
    cantCompra: number;

    constructor(){
        super();
    }
}