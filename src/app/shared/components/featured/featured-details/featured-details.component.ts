import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import * as Chart from "chart.js";

@Component({
  selector: "app-featured-details",
  templateUrl: "./featured-details.component.html",
  styleUrls: ["./featured-details.component.scss"]
})
export class FeaturedDetailsComponent implements AfterViewInit {
  constructor() {}
  @ViewChild("chart", { static: false })
  chartCanvas: ElementRef;
  ngAfterViewInit() {
    new Chart(this.chartCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Soccer",
          "Tennis",
          "Futball",
          "Basketball",
          "Baseball",
          "Swimming"
        ],
        datasets: [
          {
            data: [12, 19, 13, 15, 12, 3],
            backgroundColor: [
              "#4bf0a960",
              "#29e4b460",
              "#21aba560",
              "#26bad660",
              "#25b2df60",
              "#24a9eb60"
            ],

            borderColor: [
              "#4bf0a9",
              "#29e4b4",
              "#21aba5",
              "#26bad6",
              "#25b2df",
              "#24a9eb"
            ],
            hoverBackgroundColor: [
              "#4bf0a9",
              "#29e4b4",
              "#21aba5",
              "#26bad6",
              "#25b2df",
              "#24a9eb"
            ],

            borderWidth: 2,
            hoverBorderWidth: 4
          }
        ]
      },
      options: {
        legend: {
          position: "left",
          labels: {
            fontColor: "white",
            fontSize: 16,
            padding: 20
          }
        },

        title: {
          position: "top",
          padding: 20,

          display: true,
          fontColor: "white",
          fontSize: 20,
          text: "Global Statistics"
        }
      }
    });
  }
}
