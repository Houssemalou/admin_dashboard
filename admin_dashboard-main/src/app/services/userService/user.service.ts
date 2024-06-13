import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { map, Observable } from 'rxjs';
import { UserLogin } from '../../models/userLogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  deleteUser(id : number){

  }
  private loginUrl = 'http://localhost:8088/api/OnLineFoodOrder/auth/authenticate';

  login(credentials: UserLogin): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials)
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
        return response;
      }));
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Convert to boolean
  }

}
