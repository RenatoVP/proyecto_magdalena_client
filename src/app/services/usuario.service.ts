import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:8081/api/usuario';

  constructor(private http: HttpClient) { }

}
