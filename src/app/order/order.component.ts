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
  ready: boolean = false;
  constructor(private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit() {
    this.orderService.somethingMessage$.subscribe((data: any) => this.updateOrders(data));
    this.localOrders = JSON.parse(localStorage.getItem("Orders") || "[]");
    for (var order of this.localOrders) {
      for (var meal of order.orderedItems) {
        meal.ready = false;
      }
    }
  }

  updateOrders(order) {
    order = JSON.parse(order);
    console.log(order);
    const newOrder = new Order(order.tableNumber, order.orderTime, order.orderedItems.map(meal => new Meal(meal.name, meal.amount)));
    this.localOrders = JSON.parse(localStorage.getItem("Orders") || "[]");
    this.localOrders.push(newOrder);
    localStorage.setItem("Orders", JSON.stringify(this.localOrders));
    this.orders.push(newOrder);
  }

  mealToggle(meal, order) {
    console.log(order);
    meal.ready = !meal.ready;
    order.ready = this.orderReady(order);
    console.log(order);
  }

  orderReady(order): boolean {
    for (var meal of order.orderedItems) {
      console.log(meal)
      if (meal.ready === false) return false;
    }
    return true;
  }

}