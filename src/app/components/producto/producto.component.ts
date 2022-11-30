import { Producto } from './../../models/producto';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  lstproducto: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  // Al iniciar la aplicacion
  ngOnInit(): void { 
    // lstproducto almacenara los datos de la base de datos de la tabla producto
    this.listaProductos();
  }

  // Funcion que inserta los datos de la base de datos al lstproducto
  listaProductos(){
    return this.productoService.getAll().subscribe(data => {
      this.lstproducto = data;
    });
  }

  // Funcion que elimina un producto segun su id
  eliminar(id: number){
    this.productoService.delete(id).subscribe(data => {
      this.listaProductos();
    });
  }

}
