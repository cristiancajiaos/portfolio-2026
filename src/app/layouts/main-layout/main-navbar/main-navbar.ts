import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Link {
  title: string;
  route: string;
}
@Component({
  selector: 'app-main-navbar',
  imports: [RouterLink],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.css',
})
export class MainNavbar {

  links = signal<Link[]>([{
    title: 'Projectos',
    route: 'projects'
  }, {
    title: 'Certificados',
    route: 'certificates'
  }, {
    title: 'Contacto',
    route: 'contact'
  }])

}
