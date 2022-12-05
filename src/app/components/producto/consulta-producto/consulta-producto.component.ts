import { Carrito } from './../../../models/carrito';
import { CompraService } from './../../../services/compra.service';
import { Producto } from './../../../models/producto';
import { ProductoService } from './../../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-producto',
  templateUrl: './consulta-producto.component.html',
  styleUrls: ['./consulta-producto.component.css']
})
export class ConsultaProductoComponent implements OnInit {

  lstproducto: Producto[] = [];
  nombreProductoKey: string = "";

  constructor(
    private compraService: CompraService,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
  }

  //Consultar productos por su nombre
  consultarxNombre(nombre: string){
    this.productoService.getAllByNombre(nombre).subscribe(data => {
      this.lstproducto = data;
    });
  }

  consultaxId(id: number){
    this.productoService.get(id).subscribe(data => {
      let bean: Carrito = new Carrito();

      bean.id = data.id;
      bean.descripcion = data.descripcion;
      bean.precio = data.precio;
      bean.cantidad = data.cantidad;
      bean.cantCompra = 1;
      bean.idcategoria = data.idcategoria;

      this.compraService.lstproductoACompra.push(bean);
    })
  }

}
