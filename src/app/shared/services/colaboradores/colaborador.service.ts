import { BACKEND_URL } from './../../../../environments/environment';
import { Colaborador } from '../../models/Colaborador';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private serviceUrl = `${BACKEND_URL}/colaborador`;


  constructor(private http: HttpClient) { }

  indexar(entidade: Colaborador){
    //return this.http.post<Colaborador>(`${this.serviceUrl}/indexar`,entidade,this._httpOptions)
    return this.http.post<Colaborador>(`${this.serviceUrl}/indexar`,entidade);
  }

  searchByName(nome: string) : Observable<Colaborador[]>{
    return this.http.get<Colaborador[]>(`${this.serviceUrl}/{$nome}`);
  }
}
