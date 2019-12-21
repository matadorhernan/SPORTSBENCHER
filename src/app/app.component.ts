import { Component} from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";
import { NavigationService } from "./services/navigation.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent{

  public isAuthenticated: boolean = false;
  public isSideNavMinimized: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private navigationService: NavigationService
  ) {

    authenticationService.isAuthenticated$.subscribe((observer: boolean) => {
      this.isAuthenticated = observer;
    });

    navigationService.isSideNavMinimized$.subscribe((observer: boolean) => {
      this.isSideNavMinimized = observer;
    });

  }

}
