import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ApiService } from './api.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'post-new/1',
    pathMatch: 'full'
  },
  {
    path: 'post-new/:id',
    loadComponent: () => import('./post-new/post.component'),
    resolve: {
      some: () => {
        return inject(ApiService).getWelcome()
      }
    }
  },
  {
    path: 'post-old/:id',
    loadComponent: () => import('./post-old/post.component'),
    resolve: {
      some: () => {
        return inject(ApiService).getWelcome()
      }
    }
  }
];
