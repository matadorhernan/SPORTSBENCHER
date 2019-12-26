import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    let sidenav = document.querySelector(".sidenav");
    let instance = M.Sidenav.init(sidenav, {
      draggable: true,
      onCloseEnd: () => {
        this.navigationService.isSideNavMinimized$.next(false);
      }
    });

    this.navigationService.isSideNavMinimized$.subscribe(status => {
      if (status) {
        instance.open();
      } else {
        instance.close();
      }
    });
  }
}
