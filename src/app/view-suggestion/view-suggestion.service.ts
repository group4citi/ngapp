import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewSuggestionService {

  BASE_PATH: 'http://citichennailinux10.conygre.com:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public email: string;
  public ticker: string;
  public quantity: number;


  constructor(private http: HttpClient) {

  }

  viewSuggestionService(email: string, ticker: string, quantity:number ){
    console.log(email);
    const resp = new HttpResponse();
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const params = new HttpParams().append('email',email).append('ticker',ticker).append('quantity',quantity.toString());
    return this.http.get('http://citichennailinux10.conygre.com:8080/api/prediction', { headers, params , responseType: 'text' }).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
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
}
