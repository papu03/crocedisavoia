import { Component, OnInit, OnDestroy, signal } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription, filter } from "rxjs";

@Component({
  selector: "app-book-intro",
  standalone: true,
  templateUrl: "./book-intro.component.html",
})
export class BookIntroComponent implements OnInit, OnDestroy {
  isVisible = signal(false);
  isOpening = signal(false);

  private routerSub!: Subscription;
  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        if (e.urlAfterRedirects === "/" || e.url === "/") {
          this.play();
        }
      });

    if (this.router.url === "/") {
      this.play();
    }
  }

  private play() {
    this.timers.forEach(clearTimeout);
    this.timers = [];
    this.isOpening.set(false);
    this.isVisible.set(true);

    this.timers.push(setTimeout(() => this.isOpening.set(true), 500));
    this.timers.push(setTimeout(() => this.isVisible.set(false), 3200));
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.timers.forEach(clearTimeout);
  }
}
