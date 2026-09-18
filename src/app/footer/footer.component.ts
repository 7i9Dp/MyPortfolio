import { Component } from '@angular/core';
import { BRAND, NAV_ITEMS, PROFILE, SOCIAL_LINKS } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: false
})
export class FooterComponent {
  readonly brand = BRAND;
  readonly profile = PROFILE;
  readonly navItems = NAV_ITEMS;
  readonly socials = SOCIAL_LINKS;
  readonly year = new Date().getFullYear();

  go(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
