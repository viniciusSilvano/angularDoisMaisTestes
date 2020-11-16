import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-web-socket-test',
  templateUrl: './web-socket-test.component.html',
  styleUrls: ['./web-socket-test.component.css']
})
export class WebSocketTestComponent implements OnInit {
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
      }
     ]
  }

}
