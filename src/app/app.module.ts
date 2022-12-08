import { AuthInterceptorService } from './interceptors/AuthInterceptor.interceptor.service';
import { AuthService } from './services/auth.service';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormsModule } from '@angular/forms';
import { RegistraProductoComponent } from './components/producto/registra-producto/registra-producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistraCategoriaComponent } from './components/categoria/registra-categoria/registra-categoria.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './components/home/home.component';
import { CompraComponent } from './components/compra/compra.component';
import { ConsultaProductoComponent } from './components/producto/consulta-producto/consulta-producto.component';
import { RegistrarUsuarioComponent } from './components/usuario/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './components/usuario/actualizar-usuario/actualizar-usuario.component';
import { ListaUsuariosComponent } from './components/usuario/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    RegistraProductoComponent,
    CategoriaComponent,
    RegistraCategoriaComponent,
    LoginComponent,
    HomeComponent,
    CompraComponent,
    ConsultaProductoComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    ProductoService,
    CategoriaService,
    AuthService,
    CookieService,
    AuthInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
