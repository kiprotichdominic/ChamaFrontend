import { Group } from './../../Models/group';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = "https://localhost:44385"
  // baseURL: string = "http://localhost:3000/";
  private currentUserToken;
  
  constructor(private http: HttpClient) {
    this.currentUserToken = (JSON.parse(localStorage.getItem('Token')));
  }
 
  getGroups(): Observable<Group[]> {
    console.log('getGroups '+this.apiUrl + 'groups')
    return this.http.get<Group[]>(this.apiUrl + 'groups')
  }
  // register(user: User) {
  //   return this.http.post(`${this.apiUrl}/user/`, user);
  // }
  // getLoggedInUser(auth_token): Observable<any> {
  //   const headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${auth_token}`
  //   })
  //   return this.http.get(apiUrl, { headers: headers })
  // }
  createGroup(group:Group){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.currentUserToken}`
    })
    const body=JSON.stringify(group);
    this.http.post<any>(`${this.apiUrl}/api/groups`, body,{ headers: headers }).subscribe(data => {
      console.log(data)
        // this.postId = data.id;
    });
  }

  // createGroup(group:Group): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(group);
  //   console.log(body)
  //   return this.http.post(this.apiUrl + 'people', body,{'headers':headers})
  // }
 
}
//   this.httpClient.post(`http://127.0.0.1:8000/api/`, this.model,{
//   }).subscribe(result => {
//     console.log( result );
// this.router.navigate(['/']);

