import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {

  usuario : Usuario = new Usuario();
  constructor(private usuarioServicio:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }
  
  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      
      this.irALaListaDeUsuarios();
    },error => console.log(error));
  }

  irALaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    
  }

  onSubmit(){
    this.guardarUsuario();
  }
}
