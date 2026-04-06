import { Component, OnInit, OnDestroy, signal, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-video-intro',
  standalone: true,
  templateUrl: './video-intro.component.html'
})
export class VideoIntroComponent implements OnInit, OnDestroy {
  isVisible = signal(false);
  isFading = signal(false);

  @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;

  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const url = e.urlAfterRedirects || e.url;
        if (url === '/storia') {
          this.play();
        }
      });
  }

  private play() {
    this.isFading.set(false);
    this.isVisible.set(true);

    // Aspetta che il DOM sia pronto, poi avvia il video
    setTimeout(() => {
      const video = this.videoEl?.nativeElement;
      if (!video) return;
      video.currentTime = 0;
      video.play().catch(() => {
        // Se autoplay bloccato, dissolvi subito
        this.fadeOut();
      });
    }, 50);
  }

  onVideoEnded() {
    this.fadeOut();
  }

  private fadeOut() {
    this.isFading.set(true);
    setTimeout(() => this.isVisible.set(false), 1000);
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}
