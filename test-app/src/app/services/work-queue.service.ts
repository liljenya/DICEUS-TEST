import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkQueueItem } from '../../models/dashboard/work-queue-item';

@Injectable({
  providedIn: 'root'
})
export class WorkQueueService {

  constructor(private http: HttpClient) { }

  getWorkQueue(): Observable<WorkQueueItem[]> {
    return this.http.get<WorkQueueItem[]>('assets/mocks/dashboard/work-queue.json');
  }
}
