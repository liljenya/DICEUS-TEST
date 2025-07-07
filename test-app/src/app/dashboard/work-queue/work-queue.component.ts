import { Component, OnInit } from '@angular/core';
import { WorkQueueService } from '../../services/work-queue.service';
import { WorkQueueItem, WorkQueueItemStatus, WorkQueueItemType } from '../../../models/work-queue-item';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-queue.component.html',
  styleUrl: './work-queue.component.css'
})
export class WorkQueueComponent implements OnInit {
  workQueueItems: WorkQueueItem[] = [];

  constructor(private workQueueService: WorkQueueService) {
  }

  ngOnInit(): void {
    this.workQueueService.getWorkQueue().subscribe(data => {
      this.workQueueItems = data;
    });
  }

  toStatusString(status: WorkQueueItemStatus) {
    switch (status) {
      case WorkQueueItemStatus.New:
        return 'New';
      case WorkQueueItemStatus.Pending:
        return 'Pending Review';
      case WorkQueueItemStatus.Completed:
        return 'Completed';
    }
  }

  toTypeString(type: WorkQueueItemType) {
    switch (type) {
      case WorkQueueItemType.Request:
        return 'Loss Control Request';
      case WorkQueueItemType.Referral:
        return 'Underwiter Referral';
      case WorkQueueItemType.Email:
        return 'Email';
    }
  }

  getStatusClass(status: WorkQueueItemStatus): string {
    if (status === WorkQueueItemStatus.New) {
      return 'blue';
    } else if (status === WorkQueueItemStatus.Pending) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}



