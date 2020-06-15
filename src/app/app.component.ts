import { OrderService } from './services/order.service';
import { Component, OnInit } from "@angular/core";
import { WebSocketAPI } from './websocket';
import { Order } from './models/order';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "MediaanAngularKitchen";
  webSocket: WebSocketAPI;
  greeting: any;
  order: Order;
  name: string;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.webSocket = new WebSocketAPI(new AppComponent(this.orderService), this.orderService);
    this.connect();
  }

  connect(){
    this.webSocket._connect();
  }

  disconnect(){
    this.webSocket._disconnect(); 
  }

  handleOrder(order){
    this.order = order;
  }

  handleMessage(message){
    this.greeting = message;
  }

}