import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'widgets.component.html',
  styleUrls: ['./widgets.component.less'],
})
export class WidgetsComponent implements OnInit {

  private brandPrimary: string = '#0275d8';
  private brandSuccess: string = '#4dbd74';
  private brandInfo: string = '#63c2de';
  private brandWarning: string = '#f0ad4e';
  private brandDanger: string = '#d9534f';

  private options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };

  constructor() { }

  public ngOnInit() { }

  private lineChartData = (color: string): any => {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [65, 59, 84, 84, 51, 55, 40],
          label: 'Series A',
          backgroundColor: color,
          borderColor: '#fff'
        }
      ]
    };
  }

  // events
  private chartClicked(e: any): void {
    console.log(e);
  }

  private chartHovered(e: any): void {
    console.log(e);
  }

}
