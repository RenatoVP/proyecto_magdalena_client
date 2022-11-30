import { RegistraCategoriaComponent } from './components/categoria/registra-categoria/registra-categoria.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistraProductoComponent } from './components/producto/registra-producto/registra-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'producto', component: ProductoComponent },
  { path: 'producto/registra', component: RegistraProductoComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/registra', component: RegistraCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
