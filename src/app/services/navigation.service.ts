import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  public isSideNavMinimized$: BehaviorSubject<boolean>;

  constructor() {
    this.isSideNavMinimized$ = new BehaviorSubject(
      localStorage.getItem("00A001") == "true" || false
    );
    this.isSideNavMinimized$.subscribe(status => {
      localStorage.setItem("00A001", status.toString());
    });
  }
}
