import { Component, signal } from '@angular/core';
import { MainNavbar } from '../main-navbar/main-navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-footer',
  imports: [],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.css',
})
export class MainFooter {

  currentYear = signal<number>(new Date().getFullYear());
}
