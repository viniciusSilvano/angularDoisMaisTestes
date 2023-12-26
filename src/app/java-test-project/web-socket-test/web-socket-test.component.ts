import { WebSocketProgress } from './../../shared/models/WebSocketProgress';
import { WebsocketTesteJavaService } from './../../shared/services/websocket-teste-java/websocket-teste-java.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-web-socket-test',
  templateUrl: './web-socket-test.component.html',
  styleUrls: ['./web-socket-test.component.css']
})
export class WebSocketTestComponent implements OnInit {

  constructor(private websocketTesteJavaService: WebsocketTesteJavaService) { }

  items: MenuItem[] = [];
  progresso: WebSocketProgress = new WebSocketProgress();

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
    this.initWebSocket();
  }

  sendMessage(){
    this.websocketTesteJavaService.sendMessage("teste");
  }

  initWebSocket(){
    this.websocketTesteJavaService.getWebSocket().onmessage = ({data}) => {
      this.progresso = data
    }

    this.websocketTesteJavaService.getWebSocket().onclose = () => {
      console.log("web socket fechado");
    }

    this.websocketTesteJavaService.getWebSocket().onerror = () => {
      console.error("erro no web socket");
    }
    /*this.websocketTesteJavaService.getWebSocket().subscribe(
      msg =>  this.progresso = msg,
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );*/

  }
}
