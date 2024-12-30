import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  standalone:false
})
export class AboutMeComponent {

  flag:boolean=false;

  ColapaseReadMore(){
    this.flag =!this.flag
  }
}
