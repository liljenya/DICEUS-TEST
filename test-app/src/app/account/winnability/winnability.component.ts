import { Component, Input } from '@angular/core';
import { Details } from '../../../models/account/details';
import { WinnabilityIndicatorComponent } from '../../winnability-indicator/winnability-indicator.component';
import { CommonModule } from '@angular/common';
import { FillingGraphComponent } from '../../filling-graph/filling-graph.component';
import { ChangeChartComponent } from '../../change-chart/change-chart.component';

@Component({
  selector: 'app-winnability',
  standalone: true,
  imports: [CommonModule, WinnabilityIndicatorComponent, FillingGraphComponent, ChangeChartComponent],
  templateUrl: './winnability.component.html',
  styleUrl: './winnability.component.css'
})
export class WinnabilityComponent {
  @Input() details!: Details;
}
