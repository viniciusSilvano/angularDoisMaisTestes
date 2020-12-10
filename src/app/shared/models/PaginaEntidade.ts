import { IEntidade } from './IEntidade';

export class PaginaEntidade{
  constructor(entidades: IEntidade[], total: number){
    this.entidades = entidades;
    this.total = total;
  }
  entidades: IEntidade[];
  total: number;
  paginaInicio?: number;
  registrosPorPagina?: number
}
