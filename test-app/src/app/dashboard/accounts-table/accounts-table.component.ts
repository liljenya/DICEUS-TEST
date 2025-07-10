import { Component, OnInit } from '@angular/core';
import { AccountItem, AccountItemAppetite, AccountItemStatus } from '../../../models/dashboard/account-item';
import { AccountsService } from '../../services/accounts.service';
import { CommonModule } from '@angular/common';
import { WinnabilityIndicatorComponent } from '../../winnability-indicator/winnability-indicator.component';

@Component({
  selector: 'app-accounts-table',
  standalone: true,
  imports: [CommonModule, WinnabilityIndicatorComponent],
  templateUrl: './accounts-table.component.html',
  styleUrl: './accounts-table.component.css'
})
export class AccountsTableComponent implements OnInit {
  accounts: AccountItem[] = [];

  constructor(private accountService: AccountsService) {
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  toStringAppetite(appetite: AccountItemAppetite) {
    switch (appetite) {
      case AccountItemAppetite.High:
        return 'HIGH';
      case AccountItemAppetite.Medium:
        return 'MEDIUM';
      case AccountItemAppetite.Cautious:
        return 'CAUTIOUS';
    }
  }

  getRatioColor(ratio: number): string {
    if (ratio <= 33) {
      return 'green';
    } else if (ratio > 33 && ratio < 67) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  toStringStatus(status: AccountItemStatus) {
    switch (status) {
      case AccountItemStatus.Active:
        return 'Active';
      case AccountItemStatus.Review:
        return 'Under Review';
    }
  }

  getStatusColor(status: AccountItemStatus): string {
    switch (status) {
      case AccountItemStatus.Active:
        return 'dot green';
      case AccountItemStatus.Review:
        return 'dot blue';
      default:
        return 'dot';
    }
  }
}