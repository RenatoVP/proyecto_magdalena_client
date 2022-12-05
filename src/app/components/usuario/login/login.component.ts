import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  //Al ejecutarse verificara que el usuario ingresado en el formulario de login sea valido
  // Si es valido retornara a la web principal, se quedara en el login hasta que ingrese un usuario y/o contraseña valido
  login(){

    if(this.username.trim() == '' || this.username.trim() == null){
      console.log('El nombre de usuario es requerido!');
      return;
    }else if(this.password.trim() == '' || this.password.trim() == null){
      console.log('La constraseña del usuario es requerido!');
      return;
    }

    this.authService.login(this.username, this.password).subscribe(data => {
      this.router.navigate(['']);
      this.invalidLogin = false;
    }, error => {
      this.invalidLogin = true;
    });

  }

}
