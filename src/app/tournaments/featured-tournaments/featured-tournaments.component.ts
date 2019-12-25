import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-featured-tournaments",
  templateUrl: "./featured-tournaments.component.html",
  styleUrls: ["./featured-tournaments.component.scss"]
})
export class FeaturedTournamentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let tabs = document.querySelector(".tabs");
    const options = { swipeable: true };
    M.Tabs.init(tabs, options);

    let carousel: any = document.querySelector(".carousel");
    carousel.style.height = "250px";
    carousel.style.background = "linear-gradient(90deg, #1deea4, #1daae8)";

    let indicator: any = document.querySelector(".indicator");
    indicator.style.background = "#1DA1F2";
    indicator.style.top = "0";
  }
}
