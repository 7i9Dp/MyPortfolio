import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about-me', component: AboutMeComponent, title: 'About Me' },
  { path: 'education', component: EducationDetailsComponent, title: 'Education Details' },
  { path: 'skills', component: SkillsComponent, title: 'Skills' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  { path: 'contact-me', component: ContactMeComponent, title: 'Contact Me' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
