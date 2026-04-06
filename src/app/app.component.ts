import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookIntroComponent } from './components/book-intro/book-intro.component';
import { VideoIntroComponent } from './components/video-intro/video-intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BookIntroComponent, VideoIntroComponent],
  template: `
    <app-book-intro />
    <app-video-intro />
    <app-navbar />
    <main class="pt-20">
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class AppComponent {}
