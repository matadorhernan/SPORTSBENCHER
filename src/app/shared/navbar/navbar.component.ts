import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
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

  ngOnInit() {}

  /**
   * toggleSideNav
   */
  public toggleSideNav() {
    this.navigationService.isSideNavMinimized$.next(!this.isSideNavMinimized);
  }

  public logOutHandler() {
    this.authenticationService.isAuthenticated$.next(false);
  }
}
