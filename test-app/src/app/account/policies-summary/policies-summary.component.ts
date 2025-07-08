import { Component, Input } from '@angular/core';
import { Policies } from '../../../models/account/policies';

@Component({
  selector: 'app-policies-summary',
  standalone: true,
  imports: [],
  templateUrl: './policies-summary.component.html',
  styleUrl: './policies-summary.component.css'
})
export class PoliciesSummaryComponent {
  @Input() policies!: Policies;
}
