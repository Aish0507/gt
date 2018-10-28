import {Injectable} from '@angular/core';
import * as Highcharts from 'highcharts/highcharts.src';
// const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Injectable()
export class HighchartsService {

  charts = [];
  defaultOptions = {
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },
    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        pointStart: 2010
      }
    },
    series: [{
      name: 'Installation',
      data: []
    },{
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]
  };

  constructor() {
  }

  createChart(container, options?: any) {
    console.log(container);
    let opts = !!options ? options : this.defaultOptions;
    let e = document.createElement("div");

    container.appendChild(e);
    // alert(JSON.stringify(opts));
    if (!!opts.chart) {
      opts.chart['renderTo'] = e;
    }
    else {
      opts.chart = {
        'renderTo': e
      }
    }
    this.charts.push(new Highcharts.Chart(opts));
  }

  removeFirst() {
    this.charts.shift();
  }

  removeLast() {
    this.charts.pop();
  }

  getChartInstances(): number {
    return this.charts.length;
  }

  getCharts() {
    console.log(this.charts);
  this.charts[0].series[0].setData([Math.round(Math.random() * 20), 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4], true);
  this.charts[1].series[1].setData([Math.round(Math.random() * 20), 71.5, Math.round(Math.random() * 700), 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4], true);
  this.charts[2].series[2].setData([Math.round(Math.random() * 20), 71.5, 106.4, 129.2, Math.round(Math.random() * 340), 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4], true);
    return this.charts;
  }
}
