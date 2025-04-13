import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';
import { WebsocketParallelProcessingTestService } from 'src/app/shared/services/websocket-teste-java/websocket-parallel-processing-test.service';

@Component({
  selector: 'app-web-socket-parallel-processing-test',
  templateUrl: './web-socket-parallel-processing-test.component.html',
  styleUrls: ['./web-socket-parallel-processing-test.component.css']
})
export class WebSocketParallelProcessingTestComponent implements OnInit {

  items: MenuItem[] = [];

  constructor( private websocketParallelProcessingTestService : WebsocketParallelProcessingTestService) { }

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
        label: 'Web Socket test',
        icon: 'pi pi-file',
        routerLink: "/home-page/java-test-project/web-socket-test"
      }
      
     ]
  }

  beginProcessing(){
    this.websocketParallelProcessingTestService.beginProcessing();
  }

}
