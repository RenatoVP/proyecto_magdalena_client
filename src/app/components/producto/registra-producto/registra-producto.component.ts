import { Producto } from './../../../models/producto';
import { ProductoService } from './../../../services/producto.service';
import { CategoriaService } from './../../../services/categoria.service';
import { Categoria } from './../../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registra-producto',
  templateUrl: './registra-producto.component.html',
  styleUrls: ['./registra-producto.component.css']
})
export class RegistraProductoComponent implements OnInit {

  producto: Producto = new Producto();
  lstcategoria: Categoria[] = [];

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.listaCategorias();
  }

  listaCategorias(){
    return this.categoriaService.getAll().subscribe(data => {
      this.lstcategoria = data;
    });
  }

  registrar(){
    return this.productoService.save(this.producto).subscribe(data => {
      this.router.navigate(['producto']);
    });
  }

}
