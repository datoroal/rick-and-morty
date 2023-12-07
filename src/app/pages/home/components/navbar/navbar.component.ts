import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public brandTitle = 'RICK AND MORTY';
  @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggleSidenav(): void {
    this.toggleSidenavEvent.emit(true);
  }

}
