export class Meal {
  ready: boolean;
  constructor(
    public name: string,
    public amount: number,
  ) {
    this.ready = false
  }
}
