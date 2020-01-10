import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-notification-item",
  templateUrl: "./notification-item.component.html",
  styleUrls: ["./notification-item.component.scss"]
})
export class NotificationItemComponent implements AfterViewInit {
  @Input("type") type: string;
  @Input("icon") icon: string;
  @Input("title") title: string;
  @Input("description") description: string;
  @Input("date") date: number;

  @ViewChild("item", { static: true })
  item?: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    let background = "#ffffff";
    let color = "#000000";
    let boxShadow = "#000000";

    switch (this.type) {
      case "primary":
        background = "#3366ff";
        color = "#ffffff";
        boxShadow = "#3366ff";
        break;
      case "success":
        background = "#00d68f";
        boxShadow = "#00d68f";
        color = "#ffffff";
        break;
      case "info":
        background = "#0095ff";
        boxShadow = "#0095ff";
        color = "#ffffff";
        break;
      case "warning":
        background = "#ffaa00";
        boxShadow = "#ffaa00";
        color = "#ffffff";
        break;
      case "danger":
        background = "#ff3d71";
        boxShadow = "#ff3d71";
        color = "#ffffff";
        break;
    }

    this.item.nativeElement.style.background = background;
    this.item.nativeElement.style.color = color;
    this.item.nativeElement.style.boxShadow = `0 0 20px 0px ${boxShadow}13`;
  }
}
