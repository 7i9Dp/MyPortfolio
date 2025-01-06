import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menuElement = document.querySelector('.navbar');
    const menuIcon = document.getElementById('menu');

    // Close menu if click is outside the menu and menu icon
    if (menuElement && !menuElement.contains(target) && menuIcon && !menuIcon.contains(target)) {
      this.menuOpen = false;
    }
  }
  
}
