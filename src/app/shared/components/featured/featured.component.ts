import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-featured",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.scss"]
})
export class FeaturedComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let tabs = document.querySelector(".tabs");
    const options = { swipeable: true };
    M.Tabs.init(tabs, options);
  }
}
