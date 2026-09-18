import { Component } from '@angular/core';
import { BRAND, PROCESS, SERVICES, TRUST_POINTS } from '../data/portfolio.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: false
})
export class ServicesComponent {
  readonly services = SERVICES;
  readonly process = PROCESS;
  readonly trustPoints = TRUST_POINTS;
  readonly brandName = BRAND.name;
}
