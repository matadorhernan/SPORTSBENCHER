import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tournaments-grid",
  templateUrl: "./tournaments-grid.component.html",
  styleUrls: ["./tournaments-grid.component.scss"]
})
export class TournamentsGridComponent implements OnInit {
  @Input("width") public width;

  constructor() {}

  ngOnInit() {}
}
