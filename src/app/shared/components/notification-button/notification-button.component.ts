import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.css']
})
export class NotificationButtonComponent implements OnInit {

  hideNotifications = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onClickNotificationsButton(){
    this.hideNotifications = !this.hideNotifications; 
  }

}
