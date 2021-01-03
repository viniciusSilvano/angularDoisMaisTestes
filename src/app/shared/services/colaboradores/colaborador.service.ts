import { Colaborador } from '../../models/Colaborador';
import { BACKEND_URL } from '../../config/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private serviceUrl = `${BACKEND_URL}/colaborador`;

  /*private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    })
  }*/

  constructor(private http: HttpClient) { }

  indexar(entidade: Colaborador){
    //return this.http.post<Colaborador>(`${this.serviceUrl}/indexar`,entidade,this._httpOptions)
    return this.http.post<Colaborador>(`${this.serviceUrl}/indexar`,entidade);
  }
}
