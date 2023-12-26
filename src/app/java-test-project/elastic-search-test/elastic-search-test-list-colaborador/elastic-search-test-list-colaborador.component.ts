import { ColaboradorService } from './../../../shared/services/colaboradores/colaborador.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';
import { Colaborador } from 'src/app/shared/models/Colaborador';

@Component({
  selector: 'app-elastic-search-test-list-colaborador',
  templateUrl: './elastic-search-test-list-colaborador.component.html',
  styleUrls: ['./elastic-search-test-list-colaborador.component.css']
})
export class ElasticSearchTestListColaboradorComponent implements OnInit {
  items: MenuItem[] = [];
  colaboradores: Colaborador[] = [];

  colaboradorName: string;

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

  private clearColaboradorList(){
    this.colaboradores = [];
  }

  getColaboradorByName(){
    if(this.colaboradorName){
      this.clearColaboradorList();
      this.colaboradorService.searchByName(this.colaboradorName).subscribe(colaboradores => {
        this.colaboradores = colaboradores;
      });
    }
  }

}
