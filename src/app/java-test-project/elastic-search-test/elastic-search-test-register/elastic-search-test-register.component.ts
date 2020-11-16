import { ColaboradorService } from './../../../shared/services/colaboradores/colaborador.service';


import { Colaborador } from './../../../shared/models/Colaborador';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-elastic-search-register',
  templateUrl: './elastic-search-test-register.component.html',
  styleUrls: ['./elastic-search-test-register.component.css']
})
export class ElasticSearchTestRegisterComponent implements OnInit {

  elasticSearchColaboradorRegisterForm: FormGroup=  new FormGroup({
    elasticColaboradorNome: new FormControl('')
  });
  items: MenuItem[] = [];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.items = [
      { 
        label: 'Home Page',
        icon: 'pi pi-home',
        routerLink:"/home-page",     
      },
      {
        label: 'Java Test Project',
        icon: 'pi pi-folder',
        routerLink: "/home-page/java-test-project"
      },
      {
        label: 'Elastic Search',
        icon: 'pi pi-folder',
        routerLink: "/home-page/java-test-project/elastic-search-test"
      }
    ]
  }

  public save(){
    console.log("save button clicked, form:  ", this.elasticSearchColaboradorRegisterForm.value.elasticColaboradorNome);
    let entidade: Colaborador = new Colaborador();
    entidade.nome = this.elasticSearchColaboradorRegisterForm.value.elasticColaboradorNome;
    this.colaboradorService.indexar(entidade).subscribe(i =>{
      console.log("Sucesso ao indexar");
    },e => {
      console.log("Erro durante indexação: ", e);
    });
  }

}
