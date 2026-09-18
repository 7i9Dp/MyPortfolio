import { Component } from '@angular/core';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolio.data';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  standalone: false
})
export class ContactMeComponent {
  readonly profile = PROFILE;
  readonly socials = SOCIAL_LINKS;
  readonly mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Project enquiry — growthforgedev')}`;
}
