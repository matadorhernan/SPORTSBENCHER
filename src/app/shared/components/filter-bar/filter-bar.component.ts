import { Component, OnInit } from "@angular/core";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.scss"]
})
export class FilterBarComponent implements OnInit {
  public isRowViewActivated = true;

  constructor(private navigationService: NavigationService) {}
  ngOnInit() {
    this.navigationService.isRowViewActivated$.subscribe(status => {
      this.isRowViewActivated = status;
    });
  }

  public toggleItems(operation: boolean) {
    this.navigationService.isRowViewActivated$.next(!operation);
  }
}
