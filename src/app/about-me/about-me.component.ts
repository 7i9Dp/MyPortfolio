import { Component } from '@angular/core';
import { EDUCATION, PROFILE, TIMELINE } from '../data/portfolio.data';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  standalone: false
})
export class AboutMeComponent {
  // readonly photo = PROFILE.photo;  // personal photo — hidden for now
  readonly heroImage = PROFILE.heroImage;
  readonly role = PROFILE.role;
  readonly experience = PROFILE.experience;
  readonly timeline = TIMELINE;
  readonly education = EDUCATION;
}
