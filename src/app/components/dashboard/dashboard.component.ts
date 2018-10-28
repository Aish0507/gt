import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';

import * as Highcharts from 'highcharts/highcharts.src';
// const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';
import {HighchartsService} from "../../services/highcharts.service";
import {TestChartComponent} from "./test-chart/test-chart.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('testChart') testChart: TestChartComponent;
  randomRange = length => {
    var arr = [];
    for (var i = 0, l = length; i < l; i++) {
      arr.push(Math.round(Math.random() * length));
    }
    return arr;
  };
  chartsList = [1,2,3];
  myCustomOptions: any;

  constructor(public hcs: HighchartsService, private changeDetectionRef: ChangeDetectorRef) {
  }

  public ngAfterViewInit() {
    console.log(this.testChart.chartsEle.nativeElement);
    for (let i = 0; i < this.chartsList.length; i++) {
      this.myCustomOptions= {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Stacked bar chart'
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total fruit consumption'
          }
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'John',
          data: this.randomRange(5)
        }, {
          name: 'Jane',
          data: this.randomRange(5)
        }, {
          name: 'Joe',
          data: this.randomRange(5)
        }]
      };
      this.createChart();
    }
  }

  public ngOnDestroy() {
  }

  rmFirst() {
    this.hcs.removeFirst();
    this.changeDetectionRef.detectChanges();

    console.log('rm first', this.hcs.getCharts());
  }

  rmLast() {
    this.hcs.removeLast();
    this.changeDetectionRef.detectChanges();
    // if (!!document.getElementById("test").lastChild) document.getElementById("test").lastChild.outerHTML = '';
    console.log('rm last', this.hcs.getCharts());
  }

  createChart() {
    this.hcs.createChart(this.testChart.chartsEle.nativeElement, this.myCustomOptions);
  }

  createCustomChart(myOpts: Object) {
    this.hcs.createChart(this.testChart.chartsEle.nativeElement, myOpts);
  }
}
