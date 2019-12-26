import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tournaments",
  templateUrl: "./tournaments.component.html",
  styleUrls: ["./tournaments.component.scss"]
})
export class TournamentsComponent implements OnInit {
  constructor() {}

  public isRowView = true;
  public isGridView = false;

  ngOnInit() {}

  public toggleItems(operation: boolean) {
    if (!this.isRowView && !operation) {
      this.isRowView = true;
      this.isGridView = false;
    } else {
      this.isRowView = false;
      this.isGridView = true;
    }
  }
}
