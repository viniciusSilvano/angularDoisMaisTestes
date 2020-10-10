import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-java-test-project',
  templateUrl: './java-test-project.component.html',
  styleUrls: ['./java-test-project.component.css']
})
export class JavaTestProjectComponent implements OnInit {

  items: MenuItem[];
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { 
        label: 'teste-java-project',
        icon: 'pi pi-home',
        routerLink:"/home-page",     
      },
      {
        label: 'Tests',
        icon: 'pi pi-folder',
        command: this.changeIcon,
        items: [{
          label: 'ElasticSearch',
          icon: 'pi pi-file',
          routerLink:"/java-test-project/elastic-search-test"
        }]
      }
    ]
  }

  changeIcon(clickedMenuItem: any){
    if (clickedMenuItem.item.icon === 'pi pi-folder') {
      clickedMenuItem.item.icon = 'pi pi-folder-open';
    } else {
      clickedMenuItem.item.icon = 'pi pi-folder';
    }
  }

}
