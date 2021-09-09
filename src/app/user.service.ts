import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = "https://ti-react-test.herokuapp.com/users";

  constructor(private httpClient: HttpClient) {

  }

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public updateUser(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  public addUser(user: object): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

}
