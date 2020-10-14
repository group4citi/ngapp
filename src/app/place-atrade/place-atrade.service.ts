import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceATradeService {

  BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public email: string;
  public ticker: string;
  public quantity: number;
  public type: string;

  constructor(private http: HttpClient) {

  }

  placeATradeService(ticker: string, quantity: number, type: string,email: string ){
    console.log(email);
    const resp = new HttpResponse();
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const params = new HttpParams().append('ticker', ticker).append('quantity', quantity.toString()).append('type',type).append('email',email);

    return this.http.get('http://localhost:8080/api/make_trade', { headers, params , responseType: 'text' }).pipe(
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
