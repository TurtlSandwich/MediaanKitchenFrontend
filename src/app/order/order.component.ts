import { Meal } from './../models/meal';
import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { OrderService } from "../services/order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  orders: Order[];
  localOrders: Order[];
  constructor(private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit() {    
    this.orderService.somethingMessage$.subscribe((data: any) => this.updateOrders(data));
    this.localOrders = JSON.parse(localStorage.getItem("Orders") || "[]");
  }

  updateOrders(order){
    order = JSON.parse(order);
    console.log(order);
    const newOrder = new Order(order.tableNumber, order.orderTime, order.orderedItems.map(meal => new Meal(meal.name, meal.amount)));
    this.localOrders = JSON.parse(localStorage.getItem("Orders") || "[]");
    this.localOrders.push(newOrder);
    localStorage.setItem("Orders", JSON.stringify(this.localOrders));
    this.orders.push(newOrder);
  }
  state: boolean = false;

  toggle(){
    this.state = !this.state;
  }
}