import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/game/game-feature.component').then(m => m.GameFeatureComponent),
  },
];
