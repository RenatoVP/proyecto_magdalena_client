import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto_magdalena_client';
  userDisplayName: string | null= '';

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('username');
  }

  //Cerrar Session
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/usuario/login');
  }
}
