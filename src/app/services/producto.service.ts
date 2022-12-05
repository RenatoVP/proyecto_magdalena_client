import { Producto } from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = 'http://localhost:8081/api/producto';

  constructor(private http: HttpClient) { }

  // Obtiene todos los productos de la base de datos
  getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  get(id: number): Observable<Producto>{
    return this.http.get<Producto>(this.url + id);
  }

  getAllByNombre(nombre: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/consulta?descripcion=' + nombre);
  }

  // Registra un nuevo producto
  save(bean: Producto): Observable<Object> {
    return this.http.post(this.url, bean);
  }

  // Actualiza un producto
  update(id: number, bean: Producto): Observable<Object> {
    return this.http.put(this.url + '/' + id, bean);
  }

  // Elimina un producto
  delete(id: number): Observable<Object> {
    return this.http.delete(this.url + '/' + id);
  }
}
