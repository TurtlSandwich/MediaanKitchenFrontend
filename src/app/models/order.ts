import { Meal } from "./meal";

export class Order {
  constructor(public tableNumber: number, public orderTime: string, public orderedItems: Meal[]) {}
}