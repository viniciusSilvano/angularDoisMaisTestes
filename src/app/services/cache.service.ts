import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  setChaves : Set<string> = new Set<string>();
  chaveCacheSetChavesApuracoes = "CHAVES_SET_APURACOES";

  cacheAtivo : boolean = true;
  chaveCacheAtivo = "CHAVE_CACHE_ATIVO_APURACOES"

  constructor() {
    this.setChaves =
    localStorage.getItem(this.chaveCacheSetChavesApuracoes)
    ? new Set(JSON.parse(localStorage.getItem(this.chaveCacheSetChavesApuracoes)))
    : new Set<string>();

    this.cacheAtivo =
    localStorage.getItem(this.chaveCacheAtivo) ?
    (/true/i).test(localStorage.getItem(this.chaveCacheAtivo))
    : true;

    localStorage.setItem(this.chaveCacheAtivo, this.cacheAtivo.toString());
  }

  contemCache(chaveCache) : boolean{
    if(this.cacheAtivo){
      return this.setChaves.has(chaveCache);
    }else{
      return false;
    }
  }

  inserirCache(chaveCache: string, valor: string){
    if(this.cacheAtivo){
      console.log('set durante inserção: ',  this.setChaves);
      this.setChaves.add(chaveCache);
      console.log('set após o add', this.setChaves);
      console.log('set convertido para array e stringfy: ', JSON.stringify([...this.setChaves]))
      localStorage.setItem(chaveCache,valor);
      localStorage.setItem(this.chaveCacheSetChavesApuracoes,JSON.stringify([...this.setChaves]));
    }
  }

  recuperarCache(chaveCache: string){
    return localStorage.getItem(chaveCache);
  }

  removerCache(){
    for(let chave of this.setChaves){
      console.log('chave recuperada do set: ', chave);
      localStorage.removeItem(chave);
    }
    this.setChaves.clear();
    localStorage.removeItem(this.chaveCacheSetChavesApuracoes);
  }

  AtivarDesativarCache(){
    this.cacheAtivo = !this.cacheAtivo;
    localStorage.setItem(this.chaveCacheAtivo, this.cacheAtivo.toString());
    if(!this.cacheAtivo){
      this.removerCache();
    }
  }

  cacheEstaAtivo(){
    return this.cacheAtivo;
  }
}
