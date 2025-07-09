import { Component, Input } from '@angular/core';
import { Details } from '../../../models/account/details';
import { Winnability } from '../../../models/winnability';

@Component({
  selector: 'app-winnability',
  standalone: true,
  imports: [],
  templateUrl: './winnability.component.html',
  styleUrl: './winnability.component.css'
})
export class WinnabilityComponent {
  @Input() details!: Details;
  
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
