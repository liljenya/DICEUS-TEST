import { Component, Input } from '@angular/core';
import { Document } from '../../../models/account/document';
import { Status } from '../../../models/account/status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-compliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-compliance.component.html',
  styleUrl: './status-compliance.component.css'
})
export class StatusComplianceComponent {
  @Input() status!: Status;
  @Input() document!: Document;

  toStatusClass(isChecked: boolean) {
    return isChecked ? 'status-checked' : 'status-unchecked';
  }

  toStatusDelimeterClass(isChecked: boolean) {
    return isChecked ? 'status-delimeter-checked' : 'status-delimeter-unchecked';
  }
}