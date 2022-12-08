import { ConsultaProductoComponent } from './components/producto/consulta-producto/consulta-producto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistraCategoriaComponent } from './components/categoria/registra-categoria/registra-categoria.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistraProductoComponent } from './components/producto/registra-producto/registra-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CompraComponent } from './components/compra/compra.component';
import { ListaUsuariosComponent } from './components/usuario/usuario/usuario.component';
import { RegistrarUsuarioComponent } from './components/usuario/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './components/usuario/actualizar-usuario/actualizar-usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'producto/registra', component: RegistraProductoComponent },
  { path: 'producto/consulta', component: ConsultaProductoComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/registra', component: RegistraCategoriaComponent },
  { path: 'usuario/login', component: LoginComponent },
  { path: 'compra', component: CompraComponent},
  {path : 'usuarios',component:ListaUsuariosComponent},
  {path:'',redirectTo:'usuarios',pathMatch:'full'},
  {path : 'registrarusuarios',component : RegistrarUsuarioComponent},
  {path : 'actualizar-usuario/:id',component : ActualizarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
