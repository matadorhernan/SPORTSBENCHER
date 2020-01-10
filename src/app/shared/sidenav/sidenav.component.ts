import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";
import { NavigationService } from "src/app/services/navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements AfterViewInit {
  public pageName: string;

  @ViewChild("tournaments", { static: false })
  tournaments?: ElementRef;
  @ViewChild("teams", { static: false })
  teams?: ElementRef;
  @ViewChild("players", { static: false })
  players?: ElementRef;
  @ViewChild("indicator", { static: false })
  indicator?: ElementRef;

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  public updateIndicator(top: number) {
    this.indicator.nativeElement.style.top = `${top}px`;
  }

  ngAfterViewInit() {
    let sidenav: HTMLElement = document.querySelector(".sidenav");

    let instance = M.Sidenav.init(sidenav, {
      draggable: true,
      onOpenStart: () => {
        sidenav.style.width = "300px";
      },
      onCloseStart: () => {
        sidenav.style.width = "59px";
      },
      onCloseEnd: () => {
        sidenav.style.width = "59px";
        sidenav.style.transform = "translate(0)";
        this.navigationService.isSideNavMinimized$.next(false);
      }
    });

    this.router.events.subscribe((url: any) => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1);

      if (this.router.url.split("/")[1] != this.pageName) {
        this.pageName = this.router.url.split("/")[1];

        switch (this.pageName) {
          case "tournaments":
            this.updateIndicator(this.tournaments.nativeElement.offsetTop);
            break;
          case "teams":
            this.updateIndicator(this.teams.nativeElement.offsetTop);
            break;
          case "players":
            this.updateIndicator(this.players.nativeElement.offsetTop);
            break;
        }
      }
    });

    sidenav.style.width = "59px";

    instance.open();

    this.navigationService.isSideNavMinimized$.subscribe(status => {
      if (status) {
        instance.open();
      } else {
        instance.close();
      }
    });
  }
}
