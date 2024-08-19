import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DickNavbarComponent } from './dick-navbar/dick-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DickNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dick-without-salt';
}
