import { Component, OnInit } from '@angular/core';
import { PaginaEntidade } from 'src/app/shared/models/PaginaEntidade';
import { PessoaService } from 'src/app/shared/services/pessoas/pessoa.service';
import { Pessoa } from '../../shared/models/Pessoa';

@Component({
  selector: 'app-teste-p-table',
  templateUrl: './teste-p-table.component.html',
  styleUrls: ['./teste-p-table.component.css']
})
export class TestePTableComponent implements OnInit {

  cols: any;
  pessoas: Pessoa[] = [];
  paginaPessoa: PaginaEntidade;
  multiSortMeta;
  totalRecords: number;

  checkedAll = false;
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.inicializarTabela();
  }

  private inicializarTabela(){
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nome', header: 'Nome' },
      { field: 'idade', header: 'IDADE'}
    ];
    this.paginaPessoa = this.pessoaService.listarTodosPaginado();
    this.pessoas = this.paginaPessoa.entidades;
    this.totalRecords = this.paginaPessoa.total;
  }

  public loadDataOnScroll($event){
    console.log("Lazy: ", $event);
  }

  public checkBoxRowOnClick(pessoa: Pessoa){
    pessoa.selecionado = !pessoa.selecionado;
  }

  public checkBoxAllClick(){
    this.checkedAll = !this.checkedAll;
  }

}
