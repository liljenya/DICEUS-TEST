import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountItem } from '../../models/dashboard/account-item';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<AccountItem[]> {
    return this.http.get<AccountItem[]>('assets/mocks/dashboard/accounts.json');
  }
}
