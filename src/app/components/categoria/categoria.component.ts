import { Categoria } from './../../models/categoria';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  lstcategoria: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.listaCategorias();
  }

  listaCategorias(){
    return this.categoriaService.getAll().subscribe(data => {
      this.lstcategoria = data;
    })
  }

  eliminar(id: number){
    this.categoriaService.delete(id).subscribe(data => {
      this.listaCategorias();
    });
  }

}
