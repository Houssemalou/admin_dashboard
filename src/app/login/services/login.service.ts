import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInModel } from '../../models/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private tokenValue: string | null = null;
  constructor(private http: HttpClient, private router: Router) { }
  login(loginObj: SignInModel): Observable<any> {
    return this.http.post<any>('Url', loginObj);
  }
  signOut() {
    this.tokenValue = null;
    this.router.navigateByUrl('/login');
  }
  getToken(): string | null {
    return this.tokenValue;
  }
  isLoggedIn(): boolean {
    return this.tokenValue !== null;
  }
  
  decodedToken() {

  }
}
