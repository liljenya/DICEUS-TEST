import { Component, OnInit } from '@angular/core';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { CommunicationComponent } from './communication/communication.component';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import { PoliciesSummaryComponent } from './policies-summary/policies-summary.component';
import { PoliciesTableComponent } from './policies-table/policies-table.component';
import { StatusComplianceComponent } from './status-compliance/status-compliance.component';
import { WinnabilityComponent } from './winnability/winnability.component';
import { Account } from '../../models/account/account';
import { AccountService } from '../services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, AccountHeaderComponent, CommunicationComponent, PerformanceMetricsComponent, PoliciesSummaryComponent, PoliciesTableComponent, StatusComplianceComponent, WinnabilityComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  account?: Account;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getAccount().subscribe(data => {
      this.account = data;
    });
  }
}

