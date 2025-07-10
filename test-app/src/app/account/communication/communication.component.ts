import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterSearchComponent } from '../../filter-search/filter-search.component';
import { Communication, CommunicationStatus } from '../../../models/account/communication';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [CommonModule, FilterSearchComponent],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  @Input() communications: Communication[] = [];

  toStatusString(status: CommunicationStatus) {
    switch (status) {
      case CommunicationStatus.New:
        return 'NEW';
      case CommunicationStatus.Responded:
        return 'Responded';
    }
  }
}
