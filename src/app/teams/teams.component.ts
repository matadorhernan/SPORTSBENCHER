import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../services/navigation.service";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.scss"]
})
export class TeamsComponent implements OnInit {
  public isRowViewActivated = true;

  constructor(private navigationService: NavigationService) {}
  ngOnInit() {
    this.navigationService.isRowViewActivated$.subscribe(status => {
      this.isRowViewActivated = status;
    });
  }
}
