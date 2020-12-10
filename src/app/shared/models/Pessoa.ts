import { IEntidade } from './IEntidade';

export class Pessoa implements IEntidade{
    id?: number;
    nome?: string;
    idade?: number;
    selecionado?: boolean = false;

    constructor(id: number, nome: string, idade: number){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
}
