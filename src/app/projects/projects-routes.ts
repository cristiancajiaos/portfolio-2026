import { Routes } from '@angular/router';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ProjectPage } from './pages/project-page/project-page';

export const projectRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProjectsPage,
      },
      {
        path: ':id',
        component: ProjectPage,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

export default projectRoutes;
