import { Router } from '@angular/router';
import { Categoria } from './../../../models/categoria';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registra-categoria',
  templateUrl: './registra-categoria.component.html',
  styleUrls: ['./registra-categoria.component.css']
})
export class RegistraCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {}

  registrar(){
    return this.categoriaService.save(this.categoria).subscribe(data => {
      this.router.navigate(['categoria']);
    });
  }

}
