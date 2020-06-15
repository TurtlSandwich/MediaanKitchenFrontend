import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MealComponent } from './meal/meal.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    OrderComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [OrderService], 
  bootstrap: [AppComponent],
})
export class AppModule {}
