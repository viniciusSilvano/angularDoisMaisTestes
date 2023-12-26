import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-elastic-search-test-home',
  templateUrl: './elastic-search-test-home.component.html',
  styleUrls: ['./elastic-search-test-home.component.css']
})
export class ElasticSearchTestHomeComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

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
       label: 'Cadastrar',
       icon: 'pi pi-pencil',
       routerLink: '/home-page/java-test-project/elastic-search-test/cadastrar'
     },
     {
       label: 'Listar',
       icon: 'pi pi-list',
       routerLink: '/home-page/java-test-project/elastic-search-test/listar'
     }
   ]
  }

}
