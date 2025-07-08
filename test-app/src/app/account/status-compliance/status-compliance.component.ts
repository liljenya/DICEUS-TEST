import { Component, Input } from '@angular/core';
import { Document } from '../../../models/account/document';
import { Status } from '../../../models/account/status';

@Component({
  selector: 'app-status-compliance',
  standalone: true,
  imports: [],
  templateUrl: './status-compliance.component.html',
  styleUrl: './status-compliance.component.css'
})
export class StatusComplianceComponent {
  @Input() status!: Status;
  @Input() document!: Document;
}
