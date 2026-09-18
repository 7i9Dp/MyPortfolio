import { Component, OnDestroy, OnInit } from '@angular/core';
import { BRAND, HERO_STATS, PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly firstName = PROFILE.name.split(' ')[0];
  readonly experience = PROFILE.experience;
  // readonly photo = PROFILE.photo;  // personal photo — hidden for now
  readonly heroImage = PROFILE.heroImage; // illustration placeholder — not rendered for now
  readonly brandName = BRAND.name;
  readonly brandTagline = BRAND.tagline;
  readonly brandLogo = BRAND.logo;
  readonly stats = HERO_STATS;

  typedText = '';

  private readonly roles = PROFILE.typedRoles;
  private roleIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.typedText = this.roles[0];
      return;
    }
    // Wait for the hero entrance animation before typing starts.
    this.timer = setTimeout(() => this.tick(), 700);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /** Typewriter loop: type a role, pause, delete it, move to the next role. */
  private tick(): void {
    const word = this.roles[this.roleIndex];
    let delay: number;

    if (!this.deleting) {
      this.typedText = word.slice(0, this.typedText.length + 1);
      delay = 70;
      if (this.typedText === word) {
        this.deleting = true;
        delay = 1800;
      }
    } else {
      this.typedText = word.slice(0, this.typedText.length - 1);
      delay = 35;
      if (!this.typedText) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        delay = 350;
      }
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }
}
