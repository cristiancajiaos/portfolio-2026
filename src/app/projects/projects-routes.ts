import { Routes } from '@angular/router';
import { ProjectsPage } from './projects-page/projects-page';
import { ProjectPage } from './project-page/project-page';

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
