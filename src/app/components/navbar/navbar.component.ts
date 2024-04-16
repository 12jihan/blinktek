import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'bt-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  paths = [
    { path: '/home', name: 'Home' },
    { path: '/contact', name: 'Contact' },
    { path: '/questions', name: 'FAQ' },
    { path: '/about', name: 'About' },
  ]
}
