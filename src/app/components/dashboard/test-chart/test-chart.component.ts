import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent implements OnInit {
  @ViewChild('charts') chartsEle: ElementRef;
  constructor() { }
  test: any = [];
  ngOnInit() {
  }

}
