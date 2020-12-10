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
  pessoasSelecionadas: Map<number,Pessoa> = new Map<number,Pessoa>();

  estaProcessandoCheckBoxAll = false;
  estaProcessandoCheckBoxRow = false;

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
    if(!this.estaProcessandoCheckBoxRow){
      this.estaProcessandoCheckBoxRow = true;

      this.alterarValorSelecaoPorRegistro(pessoa);

      if(this.estaoTodosSelecionados()){
        this.checkedAll = true;
      }else{
        this.checkedAll = false;
      }

      this.estaProcessandoCheckBoxRow = false;
    }
  }

  private alterarValorSelecaoPorRegistro(pessoa: Pessoa){
    if(this.pessoasSelecionadas.has(pessoa.id)){
      this.pessoasSelecionadas.delete(pessoa.id);
      pessoa.selecionado = false;
    }else{
      this.pessoasSelecionadas.set(pessoa.id,pessoa);
      pessoa.selecionado = true;
    }
  }

  public estaoTodosSelecionados(){
    return this.pessoasSelecionadas.size === this.totalRecords;
  }

  public checkBoxAllClick(){
    if(!this.estaProcessandoCheckBoxAll){
      this.estaProcessandoCheckBoxAll = true;
      this.modificarValorSelecaoPessoas(this.checkedAll);
      this.estaProcessandoCheckBoxAll = false;
    }
  }

  private modificarValorSelecaoPessoas(valorSelecao: boolean){
    for (var pessoa of this.pessoas) {
      pessoa.selecionado = valorSelecao;
    }
  }

  public mostrarRegistrosSelecionados(){
    console.log("Registros Selecionados: ");
    console.log("-----------------------------");
    for (var value of this.pessoasSelecionadas.values()) {
      console.log("\t ", JSON.stringify(value));
    }
    console.log("-----------------------------");
  }

}
