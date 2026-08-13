import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects-routes')
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact-routes')
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }
];
