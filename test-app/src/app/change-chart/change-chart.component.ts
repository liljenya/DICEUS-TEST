import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-change-chart',
  standalone: true,
  imports: [],
  templateUrl: './change-chart.component.html',
  styleUrl: './change-chart.component.css'
})
export class ChangeChartComponent {
  @Input() value = 0;
  @Input() color = 'linear-gradient(90deg, rgba(0, 0, 0, 0)0%, rgb(59, 185, 121) 100%)';
}






