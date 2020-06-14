import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class OrderService {

  getOrdersUrl = "";
  deleteOrderUrl = "";

  private somethingSource = new Subject<any>();
  somethingMessage$ = this.somethingSource.asObservable();

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>(this.getOrdersUrl);
  }

  // deleteOrder(order: Order) {
  //   return this.http.delete(this.deleteOrderUrl + "/" + order.id);
  // }

  something(order){
    this.somethingSource.next(order);
  }
}
