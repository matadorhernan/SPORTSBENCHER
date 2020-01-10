import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../services/navigation.service";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.scss"]
})
export class PlayersComponent implements OnInit {
  public isRowViewActivated = true;

  constructor(private navigationService: NavigationService) {}
  ngOnInit() {
    this.navigationService.isRowViewActivated$.subscribe(status => {
      this.isRowViewActivated = status;
    });
  }
}
