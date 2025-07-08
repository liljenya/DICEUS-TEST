import { Component, Input } from '@angular/core';
import { Metrics } from '../../../models/account/metrics';
import { CommonModule } from '@angular/common';
import { Winnability } from '../../../models/winnability';

@Component({
  selector: 'app-performance-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-metrics.component.html',
  styleUrl: './performance-metrics.component.css'
})
export class PerformanceMetricsComponent {
  @Input() metrics!: Metrics;

  toStringWinnability(winnability: Winnability) {
    switch (winnability) {
      case Winnability.VeryStrong:
        return 'Very Strong';
      case Winnability.Strong:
        return 'Strong';
      case Winnability.Medium:
        return 'Medium';
    }
  }
}

