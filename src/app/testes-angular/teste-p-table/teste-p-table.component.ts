import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa/pessoa';

@Component({
  selector: 'app-teste-p-table',
  templateUrl: './teste-p-table.component.html',
  styleUrls: ['./teste-p-table.component.css']
})
export class TestePTableComponent implements OnInit {

  constructor() { }
  cols: any;
  pessoas: Pessoa[] = [];
  multiSortMeta;
  totalRecords: number;
  private pessoasBanco = [
    {"id": 1,"nome":"João","idade": 20},
    {"id": 2,"nome":"Maria","idade": 12},
    {"id": 3,"nome":"Zeref","idade": 50},
    {"id": 4,"nome":"Abigail","idade": 30}
  ]

  ngOnInit(): void {
    this.cols = [
        { field: 'id', header: 'ID' },
        { field: 'nome', header: 'Nome' },
        { field: 'idade', header: 'IDADE'}
    ];
    this.pessoas = this.pessoasBanco.map(pb => new Pessoa(pb.id,pb.nome,pb.idade));
    this.totalRecords = this.pessoas.length;
  }

  public loadDataOnScroll($event){
    console.log("Lazy: ", $event);
  }

}
