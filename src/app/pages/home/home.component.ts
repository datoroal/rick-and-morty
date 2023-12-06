import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public openSidenav: boolean = false;

  public toggleSidenavEvent(event: boolean): void {
    this.openSidenav = event;
  }
}
