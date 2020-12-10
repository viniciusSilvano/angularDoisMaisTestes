import { Injectable } from '@angular/core';
import { PaginaEntidade } from '../../models/PaginaEntidade';
import { Pessoa } from '../../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  private pessoasBanco: Pessoa[] = [
    {"id": 1,"nome":"João","idade": 20},
    {"id": 2,"nome":"Maria","idade": 12},
    {"id": 3,"nome":"Zeref","idade": 50},
    {"id": 4,"nome":"Abigail","idade": 30}
  ]

  public listarTodosPaginado(){
    return new PaginaEntidade(this.pessoasBanco.map(pb => new Pessoa(pb.id,pb.nome,pb.idade)),this.pessoasBanco.length);
  }
}
