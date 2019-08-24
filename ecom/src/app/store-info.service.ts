import { Injectable } from "@angular/core";
import { Tile } from "./models/tile";
@Injectable({
  providedIn: "root"
})
export class StoreInfoService {
  tiles: Tile[] = [
    {
      text: "Pants",
      cols: 2,
      rows: 2,
      class: "one-tile",
      id: 1
    },
    {
      text: "Suits",
      cols: 1,
      rows: 1,
      class: "two-tile",
      id: 2
    },
    {
      text: "Shoes",
      cols: 1,
      rows: 2,
      class: "one-tile",
      id: 3
    },
    {
      text: "Socks",
      cols: 1,
      rows: 2,
      class: "four-tile",
      id: 4
    },
    {
      text: "Shirts",
      cols: 2,
      rows: 1,
      class: "five-tile",
      id: 5
    },
    {
      text: "Watch",
      cols: 1,
      rows: 1,
      class: "six-tile",
      id: 6
    }
  ];

  constructor() {}
}
