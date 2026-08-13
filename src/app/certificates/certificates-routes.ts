import { Routes } from '@angular/router';
import { CertificatesPage } from './pages/certificates-page/certificates-page';

export const certificatesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CertificatesPage,
        pathMatch: 'full'
      },
    ],
  },
];

export default certificatesRoutes;
