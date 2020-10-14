import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public email: string;
  public password: string;

  constructor(private http: HttpClient) {

  }

  authenticationService(email: string, password: string): Observable<any>{
    console.log(email);

/*
    return this.http.get('http://localhost:8080/api/login',
      { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
        this.email = email;
        this.password = password;
        this.registerSuccessfulLogin(email, password);
      }));
       const resp = new HttpResponse();
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const params = new HttpParams().append('email', email).append('password', password);
    return this.http.get('http://localhost:8080/api/login', { headers, params }).pipe(map((resp:Response) => {
    console.log("after api call");
    resp.json();

*/  const resp = new HttpResponse();
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const params = new HttpParams().append('email', email).append('password', password);

    return this.http.get('http://localhost:8080/api/login',{headers, params, responseType: 'text' }).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
/*
    let result = new Observable();
    result =  this.http.get('http://localhost:8080/api/login', { headers, params });
    console.log(result);
    return result; */
  }
 errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  /*
  createBasicAuthToken(email: string, password: string) {
    console.log(email);
    return 'Basic ' + window.btoa(email + ":" + password)
  }

  registerSuccessfulLogin(email, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }*/
} 