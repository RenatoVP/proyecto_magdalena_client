import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../models/categoria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string = 'http://localhost:8081/api/categoria';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  save(bean: Categoria): Observable<Object> {
    return this.http.post(this.url, bean);
  }

  update(id: number, bean: Categoria): Observable<Object> {
    return this.http.put(this.url + '/' + id, bean);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.url + '/' + id);
  }
}
