import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(
    private http:HttpClient
  ) { }

  public getPrice(url:string):Observable<any>{
    // Ejemplo de GET con el servicio de https://api.preciodelaluz.org/v1/prices/all?zone=PCB
    //donde obtendremos todos los precios de la luz del dia, donde esto es importante
    const httpOptions = {
      headers: new HttpHeaders()
    }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.get(url,httpOptions);
  }

}
