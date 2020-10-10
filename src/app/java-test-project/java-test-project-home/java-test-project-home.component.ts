import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-java-test-project-home',
  templateUrl: './java-test-project-home.component.html',
  styleUrls: ['./java-test-project-home.component.css']
})
export class JavaTestProjectHomeComponent implements OnInit {

  items: MenuItem[];
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { 
        label: 'home page',
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
          routerLink:"/home-page/java-test-project/elastic-search-test"
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
