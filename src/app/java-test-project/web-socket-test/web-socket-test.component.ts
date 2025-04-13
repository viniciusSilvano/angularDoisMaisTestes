import { interval, Subscription } from 'rxjs';
import { WebSocketProgress } from './../../shared/models/WebSocketProgress';
import { WebsocketTesteJavaService } from './../../shared/services/websocket-teste-java/websocket-teste-java.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-web-socket-test',
  templateUrl: './web-socket-test.component.html',
  styleUrls: ['./web-socket-test.component.css']
})
export class WebSocketTestComponent implements OnInit, OnDestroy {

  constructor(private websocketTesteJavaService: WebsocketTesteJavaService) { }

  items: MenuItem[] = [];
  progresso: WebSocketProgress = new WebSocketProgress();
  progressAsInt: number = 0;
  intervalSubscription : Subscription;

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
        label: 'Web Socket Parallel Processing test',
        icon: 'pi pi-file',
        routerLink: "/home-page/java-test-project/web-socket-test-parallel-processing"
      }
      
     ]
     this.initWebSocket();
     this.validateWebSocket();
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
    this.websocketTesteJavaService.closeWebSocket();
  }

  sendMessage(){
    //this.initWebSocket();
    console.log("status websocket: ", this.websocketTesteJavaService.getWebSocket().readyState)
    if (this.websocketTesteJavaService.isClosed()) {
      this.initWebSocket()
      this.websocketTesteJavaService.getWebSocket().onopen =  () => {
        this.websocketTesteJavaService.getWebSocket().send("teste");
      };
   }else{
     this.websocketTesteJavaService.sendMessage("teste");
   }
  }

  private validateWebSocket(){
    if(!this.intervalSubscription){
      this.intervalSubscription = interval(5000).subscribe(() => {
        console.log("iniciando checagem websocket!!")
        this.initWebSocket();
      });
    }
  }

  private initWebSocket(){
    if(this.websocketTesteJavaService.isClosed()){
      this.websocketTesteJavaService.webSocketInit();
      this.initWebSocketEvent();
    }
  }

  private initWebSocketEvent(){
   
    this.websocketTesteJavaService.getWebSocket().onmessage = ({data}) => {
      console.log("receiving websocket message: ", data ? JSON.stringify(data) : "");
      console.log(JSON.parse(data).progress);
      //this.progresso.progress = JSON.parse(data).progress;
      this.progressAsInt = JSON.parse(data).progress
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
