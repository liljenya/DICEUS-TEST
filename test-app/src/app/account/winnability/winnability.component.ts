import { Component, Input } from '@angular/core';
import { Details } from '../../../models/account/details';

@Component({
  selector: 'app-winnability',
  standalone: true,
  imports: [],
  templateUrl: './winnability.component.html',
  styleUrl: './winnability.component.css'
})
export class WinnabilityComponent {
  @Input() details!: Details;
}
