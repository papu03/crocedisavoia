import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookIntroComponent } from './components/book-intro/book-intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BookIntroComponent],
  template: `
    <app-book-intro />
    <app-navbar />
    <main class="pt-20">
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class AppComponent {}
