import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/post-new/1">New signal based input</a>
      <a routerLink="/post-old/1">Old decorator based input</a>
    </nav>
  <router-outlet />
  `
})
export class AppComponent {
}
