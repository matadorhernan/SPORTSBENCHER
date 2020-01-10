import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  public isSideNavMinimized$: BehaviorSubject<boolean>;
  public isRowViewActivated$: BehaviorSubject<boolean>;

  constructor() {
    this.isSideNavMinimized$ = new BehaviorSubject(
      localStorage.getItem("00A001") == "true" || false
    );
    this.isSideNavMinimized$.subscribe(status => {
      localStorage.setItem("00A001", status.toString());
    });
    this.isRowViewActivated$ = new BehaviorSubject(
      localStorage.getItem("00A002") == "true" || false
    );
    this.isRowViewActivated$.subscribe(status => {
      localStorage.setItem("00A002", status.toString());
    });
  }
}
