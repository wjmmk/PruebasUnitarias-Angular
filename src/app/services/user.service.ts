import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   api = 'https://api.github.com/users?since=135';

  api2 = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getAllGithub(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}`);
  }
  getAllPlaceholder(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api2}`);
  }
}

