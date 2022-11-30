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

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    RegistraProductoComponent,
    CategoriaComponent,
    RegistraCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    ProductoService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
