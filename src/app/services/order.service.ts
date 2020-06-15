import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class OrderService {


  private somethingSource = new Subject<any>();
  somethingMessage$ = this.somethingSource.asObservable();

  constructor(private http: HttpClient) {}

  something(order){
    this.somethingSource.next(order);
  }
}