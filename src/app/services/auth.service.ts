import { map, Observable, retry } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:8081/api/auth';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  //Generamos un token del usuario ingresado
  login(username: string, password: string): Observable<any>{
    return this.http.post<any>(this.url + "/ingresar", { username, password }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('token', userData.tokenAcces);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('username');
  }

}
