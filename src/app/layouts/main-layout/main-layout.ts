import { Component } from '@angular/core';
import { MainNavbar } from './main-navbar/main-navbar';
import { MainFooter } from './main-footer/main-footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [MainNavbar, MainFooter, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
