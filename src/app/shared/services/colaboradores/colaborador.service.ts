import { Colaborador } from '../../models/Colaborador';
import { BACKEND_URL } from '../../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private serviceUrl = `${BACKEND_URL}/pessoa`;

  constructor(private http: HttpClient) { }

  indexar(entidade: Colaborador){
    return this.http.put<Colaborador>(`${this.serviceUrl}/indexar`,entidade);
  }
}
