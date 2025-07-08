import { Component, Input } from '@angular/core';
import { Account } from '../../../models/account/account';

@Component({
  selector: 'app-account-header',
  standalone: true,
  imports: [],
  templateUrl: './account-header.component.html',
  styleUrl: './account-header.component.css'
})
export class AccountHeaderComponent {
  @Input() account!: Account;
}
