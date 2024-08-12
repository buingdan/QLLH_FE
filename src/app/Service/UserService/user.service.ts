import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Interface/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/users'
  constructor(private http: HttpClient) { }
  // getAll():Observable<User[]>{
  //   return this.http.get<User[]>(this.apiUrl + "/page").pipe(
  //   )
  // }
}
