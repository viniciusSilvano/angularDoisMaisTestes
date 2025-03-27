import { CacheService } from './../services/cache.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: MenuItem[];
  chaveCache: string = 'CBB'
  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Java Test Project',
        icon: 'pi pi-folder',
        routerLink:"/home-page/java-test-project"
      },
      {
        label: 'Angular testes',
        icon: 'pi pi-folder',
        routerLink:"/home-page/testes-angular"
      }
    ]
  }

  testeCache(){
    let map = new Map();
    localStorage.myMap = JSON.stringify(Array.from(map.entries()));
    console.log('Inserindo caches');
    this.cacheService.inserirCache(`${this.chaveCache}_42010_06`,'500');
    this.cacheService.inserirCache(`${this.chaveCache}_52024_06`,'600');

    console.log('recuperando cache se existir')
    if(this.cacheService.contemCache(`${this.chaveCache}_42010_06`)){
      let valor = this.cacheService.recuperarCache(`${this.chaveCache}_42010_06`);
      console.log('valor de cache recuperado: ', valor);
    }

    if(this.cacheService.contemCache(`${this.chaveCache}_52024_06`)){
      let valor = this.cacheService.recuperarCache(`${this.chaveCache}_52024_06`);
      console.log('valor de cache recuperado: ', valor);
    }

  }

  removerCache(){
    this.cacheService.removerCache();
  }

  AtivarDesativarCache(){
    this.cacheService.AtivarDesativarCache();
  }

  cacheEstaAtivo() : boolean{
    return this.cacheService.cacheEstaAtivo();
  }

}
