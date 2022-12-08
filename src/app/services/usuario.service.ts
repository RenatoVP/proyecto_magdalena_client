import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:8081/api/usuario';

  constructor(private http: HttpClient) { }

  
//este metodo nos sirve para obtener los usuarios
obtenerListaDeUsuarios():Observable<Usuario[]>{
  return this.http.get<Usuario[]>(`${this.url}`);
} 

//este metodo nos sirve para registrar un usuarios
registrarUsuario(usuario:Usuario) : Observable<Object>{
  return this.http.post(`${this.url}`,usuario);
}

//este metodo sirve para actualizar el usuario
actualizarUsuario(id:number,usuario:Usuario) : Observable<Object>{
  return this.http.put(`${this.url}/${id}`,usuario);
}

//este metodo sirve para obtener o buscar un usuario
obtenerUsuarioPorId(id:number):Observable<Usuario>{
  return this.http.get<Usuario>(`${this.url}/${id}`);
}
//este metodo sirve para eliminar un usuario
eliminarUsuario(id:number): Observable<Object>{
  return this.http.delete(`${this.url}/${id}`);
}
}


