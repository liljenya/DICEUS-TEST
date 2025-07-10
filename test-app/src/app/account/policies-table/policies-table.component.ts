import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterSearchComponent } from '../../filter-search/filter-search.component';
import { PolicyEntry, PolicyEntryStatus } from '../../../models/account/policy-entry';

@Component({
  selector: 'app-policies-table',
  standalone: true,
  imports: [CommonModule, FilterSearchComponent],
  templateUrl: './policies-table.component.html',
  styleUrl: './policies-table.component.css'
})
export class PoliciesTableComponent {
  @Input() policies: PolicyEntry[] = [];

  getRatioColor(ratio: number): string {
    if (ratio <= 33) {
      return 'green';
    } else if (ratio > 33 && ratio < 67) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  getStatusColor(status: PolicyEntryStatus): string {
    switch (status) {
      case PolicyEntryStatus.Active:
        return 'dot green';
      case PolicyEntryStatus.Pending:
        return 'dot yellow';
      default:
        return 'dot';
    }
  }

  toStatusString(status: PolicyEntryStatus): string {
    switch (status) {
      case PolicyEntryStatus.Active:
        return 'Active';
      case PolicyEntryStatus.Pending:
        return 'Pending';
    }
  }

  getExpTechSum() {
    return this.policies.reduce((acc, val) => acc + val.expTech, 0);
  }

  getExpPremiumSum() {
    return this.policies.reduce((acc, val) => acc + val.expPremium, 0);
  }

  getRenewalToTechhSum() {
    return this.policies.reduce((acc, val) => acc + val.renewalToTech, 0);
  }

  getRenewalTechSum() {
    return this.policies.reduce((acc, val) => acc + val.renewalTech, 0);
  }

  getRenewalPremiumSum() {
    return this.policies.reduce((acc, val) => acc + val.renewalPremium, 0);
  }

  getAverageRate(): number {
    if (!this.policies || this.policies.length === 0) return 0;

    const sum = this.policies.reduce((acc, val) => acc + (val.rate || 0), 0);
    return sum / this.policies.length;
  }

  getAverageLoss(): number {
    if (!this.policies || this.policies.length === 0) return 0;

    const sum = this.policies.reduce((acc, val) => acc + (val.loss || 0), 0);
    return sum / this.policies.length;
  }
}