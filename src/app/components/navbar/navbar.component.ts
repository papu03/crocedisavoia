import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { path: '/',          label: 'Home',       icon: 'home' },
    { path: '/camere',    label: 'Camere',      icon: 'bed' },
    { path: '/ristorante',label: 'Ristorante',  icon: 'restaurant' },
    { path: '/storia',    label: 'Storia',      icon: 'history_edu' },
    { path: '/contatti',  label: 'Contatti',    icon: 'mail' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  fillStyle(active: boolean): string {
    return active ? "'FILL' 1" : "'FILL' 0";
  }
}
