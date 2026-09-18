import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: false
})
export class SkillsComponent {
  readonly groups = SKILL_GROUPS;
}
