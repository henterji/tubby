import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export interface ToastEvent {
  message: string;
  level: string;
}

export interface Toast {
  message: string;
  level: string;
  styles: any[];
}

@Injectable()
export class ToastService {

  private toastEvents: Subject<ToastEvent> = new Subject<Toast>();

  get events(): Observable<ToastEvent> {
    return this.toastEvents;
  }

  public success(message: string) {
    this.publish({ message, level: 'success' });
  }

  public warning(message: string) {
    this.publish({ message, level: 'warning' });
  }

  public error(message: string) {
    this.publish({ message, level: 'error' });
  }

  private publish(toast: ToastEvent) {
    this.toastEvents.next(toast);
  }

}
