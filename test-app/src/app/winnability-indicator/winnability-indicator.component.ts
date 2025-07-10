import { Component, Input } from '@angular/core';
import { Winnability } from '../../models/winnability';

@Component({
  selector: 'app-winnability-indicator',
  standalone: true,
  imports: [],
  templateUrl: './winnability-indicator.component.html',
  styleUrl: './winnability-indicator.component.css'
})
export class WinnabilityIndicatorComponent {
  @Input() winnability: Winnability = Winnability.Medium;

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
