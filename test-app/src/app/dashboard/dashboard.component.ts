import { Component } from '@angular/core';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { MarketIntelComponent } from './market-intel/market-intel.component';
import { PortfolioGoalsComponent } from './portfolio-goals/portfolio-goals.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountsTableComponent, MarketIntelComponent, PortfolioGoalsComponent, QuickActionsComponent, WorkQueueComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
