import { Component, OnInit } from "@angular/core";
import { NumberValueAccessor } from "@angular/forms";
import { Tile } from "../models/tile";
import { StoreInfoService } from "../store-info.service";

@Component({
  selector: "app-welcomw",
  templateUrl: "./welcomw.component.html",
  styleUrls: ["./welcomw.component.scss"]
})
export class WelcomwComponent implements OnInit {
  tiles: Tile[];
  constructor(private storeInfo: StoreInfoService) {}

  ngOnInit() {
    console.log(this.storeInfo);
    this.tiles = this.storeInfo.tiles;
  }
}
