import { Component } from '@angular/core';
import { PROJECTS, PROJECTS_PERMISSION_NOTE, Project, ProjectCategory } from '../data/portfolio.data';

type Filter = 'All' | ProjectCategory;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: false
})
export class ProjectsComponent {
  // Only show filter tabs that have at least one project.
  readonly filters: Filter[] = (['All', 'Professional', 'Freelance', 'Personal'] as Filter[])
    .filter(f => f === 'All' || PROJECTS.some(p => p.category === f));

  readonly featured = PROJECTS.find(p => p.featured);
  readonly permissionNote = PROJECTS_PERMISSION_NOTE;

  activeFilter: Filter = 'All';
  visibleProjects: Project[] = PROJECTS;

  private expanded = new Set<string>();

  setFilter(filter: Filter): void {
    this.activeFilter = filter;
    this.visibleProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  }

  countFor(filter: Filter): number {
    return filter === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === filter).length;
  }

  toggle(project: Project): void {
    this.expanded.has(project.title) ? this.expanded.delete(project.title) : this.expanded.add(project.title);
  }

  isExpanded(project: Project): boolean {
    return this.expanded.has(project.title);
  }

  detailsId(project: Project): string {
    return 'details-' + project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  trackByTitle(_: number, project: Project): string {
    return project.title;
  }
}
