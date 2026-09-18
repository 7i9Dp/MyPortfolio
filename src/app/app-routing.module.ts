import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// The portfolio is a single scrolling page; old deep links (/about-me, /skills, ...) fall back to it.
const routes: Routes = [
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
