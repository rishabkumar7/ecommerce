import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { WelcomwComponent } from "./welcomw/welcomw.component";
import { RouteModule } from "./route/Route.module";
import { RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreInfoService } from "./store-info.service";
import {
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomwComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [StoreInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
