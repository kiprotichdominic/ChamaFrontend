import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/Models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://localhost:44385"

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public userId : [];
  isLoggedin: boolean = false;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/user/`, user);
  }
  login(email, password) {
      return this.http.post<any>(`${this.apiUrl}/users/authenticate`, { email, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              // localStorage.setItem('currentUser', JSON.stringify(user.userId));
              localStorage.setItem('Token', JSON.stringify(user.token));
              localStorage.setItem('currentUser', JSON.stringify(user));
              console.log(user.userId)
              console.log(user.token)
              console.log(user)
              // this.currentUserSubject.next(user);
              return user;
          }));
  }

  logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
  // isLoggedIn() {

  //   if (JSON.parse(localStorage.getItem('currentUser')) <= 0) {
  //     this.isLoggedin = false;
  //     return this.isLoggedin;
  //   }
  //   else {
  //     return true;
  //   }
  // }
}