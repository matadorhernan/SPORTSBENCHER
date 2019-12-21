import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public isSideNavMinimized$:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
