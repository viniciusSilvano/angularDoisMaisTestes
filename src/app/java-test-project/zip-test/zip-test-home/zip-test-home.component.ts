import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-zip-test-home',
  templateUrl: './zip-test-home.component.html',
  styleUrls: ['./zip-test-home.component.css']
})
export class ZipTestHomeComponent implements OnInit {
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
