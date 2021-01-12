import { BACKEND_URL } from './../../../../environments/environment';
import { ZipTestService } from './../../../shared/services/zip-test/zip-test.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-zip-test-home',
  templateUrl: './zip-test-home.component.html',
  styleUrls: ['./zip-test-home.component.css']
})
export class ZipTestHomeComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private zipTestService: ZipTestService) { }

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

  getUrlDownloadTest(){
    return `${BACKEND_URL}/teste-zip/download`;
  }

  downloadTestZip(){
    this.zipTestService.downloadZipTest().subscribe(data => {
      const blob = new Blob([data], {
        type: 'application/zip'
      });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}
