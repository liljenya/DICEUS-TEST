import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  admins = Array(13).fill('Admin');

  @ViewChild('navContainer', { static: false }) navContainer!: ElementRef;

  scrollLeft() {
    this.navContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.navContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

}
