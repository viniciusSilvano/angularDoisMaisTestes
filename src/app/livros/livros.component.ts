import { Component, OnInit } from '@angular/core';
import { Livro } from './interfaces/livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  public livros : Livro[];

  constructor() { }

  ngOnInit(): void {
    this.livros.push({id: 1, nome: 'teste'});
  }
}
