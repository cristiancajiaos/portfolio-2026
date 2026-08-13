import { Routes } from '@angular/router';
import { ContactPage } from './pages/contact-page/contact-page';

export const contactRoutes: Routes = [
  {
    path: '',
    children: [{ path: '', component: ContactPage }],
  },
];

export default contactRoutes;
