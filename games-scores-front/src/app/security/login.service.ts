import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
//import { MEAT_API } from "app/app.api";
import { User } from './user.model';
import { NavigationEnd, Router } from '@angular/router';

@Injectable()
export class LoginService {
  user: User;
  lastUrl: string;
  userNameEvent$ = new EventEmitter<string>();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => (this.lastUrl = e.url));
  }

  login(email: string, password: string): Observable<User> {
    return (
      this.httpClient
        // .post<User>(`${GAME_API}/login`, { email: email, password: password })
        .post<User>('https://localhost:3001/login', {
          email: email,
          password: password,
        })
        .pipe(
          tap((user) => (this.user = user)),
          tap(() => this.userNameEvent$.emit(this.user.name))
        )
    );
  }

  // this.userNameEvent$.emit(this.user.name);

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

  logout() {
    this.user = undefined;
  }
}
