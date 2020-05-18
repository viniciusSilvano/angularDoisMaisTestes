import { Component, OnInit } from '@angular/core';
import { Livro } from './interfaces/livro';
import { LivroService } from './services/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
  providers: [LivroService]
})
export class LivrosComponent implements OnInit {

  public livros : Livro[];

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.darAlerta();
    this.livros.push({id: 1, nome: 'teste'});
  }
}
