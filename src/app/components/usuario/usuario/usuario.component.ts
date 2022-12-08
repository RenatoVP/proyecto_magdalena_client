import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class ListaUsuariosComponent implements OnInit{
  usuarios:Usuario[];

  constructor(private usuarioServicio:UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  actualizarUsuario(id:number){
    this.router.navigate(['actualizar-usuario',id]);
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    });
  }

  eliminarUsuario(id:number){
      
    this.usuarioServicio.eliminarUsuario(id).subscribe(dato => {
      console.log(dato);
      this.obtenerUsuarios();
      
  });

} 
}