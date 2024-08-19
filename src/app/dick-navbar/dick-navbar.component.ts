import { Component } from '@angular/core';
import { NotificationPanelComponent } from '../notification-panel/notification-panel.component';

@Component({
  selector: 'dick-navbar',
  standalone: true,
  imports: [NotificationPanelComponent],
  templateUrl: './dick-navbar.component.html',
  styleUrl: './dick-navbar.component.css'
})
export class DickNavbarComponent {
  notificationCount: number = 21;
  showNotifications = false;

  toggleNotifications() {
    this.notificationCount = 0;
    this.showNotifications = !this.showNotifications;
  }

  closeNotifications() {
    this.showNotifications = false;
  }

}