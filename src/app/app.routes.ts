import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'camere',
    loadComponent: () => import('./pages/camere/camere.component').then(m => m.CamereComponent)
  },
  {
    path: 'ristorante',
    loadComponent: () => import('./pages/ristorante/ristorante.component').then(m => m.RistoranteComponent)
  },
  {
    path: 'storia',
    loadComponent: () => import('./pages/storia/storia.component').then(m => m.StoriaComponent)
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then(m => m.ContattiComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
