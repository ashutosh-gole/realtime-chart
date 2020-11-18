import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-bar-realtime-chart',
  templateUrl: './bar-realtime-chart.component.html',
  styleUrls: ['./bar-realtime-chart.component.scss']
})
export class BarRealtimeChartComponent implements OnInit {
  chart;
  data1 = [];
  public url = 'http://localhost:5000';
  public socket;

  constructor() {
    this.socket = io(this.url);
  }

  ngOnInit() {
    this.socket.on('data1', (res) => {
      this.updateChartData(this.chart, res, 0);
    })

    this.socket.on('data2', (res) => {
      this.updateChartData(this.chart, res, 1);
    })

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        },
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
          {
            type: 'bar',
            label: 'My Second dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });

  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart, data, dataSetIndex) {
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }

}
