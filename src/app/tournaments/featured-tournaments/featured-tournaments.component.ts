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
  }
}
