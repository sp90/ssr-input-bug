import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'post-new/1',
    pathMatch: 'full'
  },
  {
    path: 'post-new/:id',
    loadComponent: () => import('./post-new/post.component')
  },
  {
    path: 'post-old/:id',
    loadComponent: () => import('./post-old/post.component')
  }
];
