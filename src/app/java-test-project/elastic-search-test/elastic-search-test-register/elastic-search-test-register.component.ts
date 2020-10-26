import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-elastic-search-register',
  templateUrl: './elastic-search-test-register.component.html',
  styleUrls: ['./elastic-search-test-register.component.css']
})
export class ElasticSearchTestRegisterComponent implements OnInit {

  elasticSearchRegisterForm: FormGroup=  new FormGroup({
    colaboradorNome: new FormControl('')
  });
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
        label: 'Elastic Search',
        icon: 'pi pi-folder',
        routerLink: "/home-page/java-test-project/elastic-search-test"
      }
    ]
  }

  public save(){
    console.log("save button clicked, form:  ", this.elasticSearchRegisterForm);
  }

}
