import { Component, EventEmitter, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  templateUrl: './notification-panel.component.html',
  styleUrls: []
})
export class NotificationPanelComponent {
  @Output() close = new EventEmitter<void>();

  closePanel() {
    this.close.emit();
  }
}
