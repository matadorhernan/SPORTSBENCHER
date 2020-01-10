import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../services/navigation.service";

@Component({
  selector: "app-tournaments",
  templateUrl: "./tournaments.component.html",
  styleUrls: ["./tournaments.component.scss"]
})
export class TournamentsComponent implements OnInit {
  public isRowViewActivated = true;

  constructor(private navigationService: NavigationService) {}
  ngOnInit() {
    this.navigationService.isRowViewActivated$.subscribe(status => {
      this.isRowViewActivated = status;
    });
  }
}
