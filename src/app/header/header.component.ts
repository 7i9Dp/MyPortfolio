import { Component, HostListener, OnInit } from '@angular/core';
import { BRAND, NAV_ITEMS, PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  readonly navItems = NAV_ITEMS;
  readonly brand = BRAND;
  readonly founder = PROFILE.name;

  menuOpen = false;
  scrolled = false;
  activeId = 'home';

  private ticking = false;

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.updateScrollState();
      this.ticking = false;
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 900 && this.menuOpen) this.closeMenu();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu(): void {
    this.menuOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  go(event: Event, id: string): void {
    event.preventDefault();
    this.closeMenu();
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`);
    this.activeId = id;
  }

  private updateScrollState(): void {
    const y = window.scrollY;
    this.scrolled = y > 12;

    // The active section is the last one whose top has passed a line 40% down the viewport.
    const probe = y + window.innerHeight * 0.4;
    let current = this.navItems[0].id;
    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section && section.offsetTop <= probe) current = item.id;
    }
    // Bottom of the page: highlight the last section even if it is short.
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) {
      current = this.navItems[this.navItems.length - 1].id;
    }
    this.activeId = current;
  }
}
