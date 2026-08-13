import { Routes } from '@angular/router';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ProjectPage } from './pages/project-page/project-page';

export const projectRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Proyectos',
        component: ProjectsPage,
        pathMatch: 'full'
      },
      {
        path: ':id',
        title: 'Proyecto',
        component: ProjectPage,
        pathMatch: 'full'
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
