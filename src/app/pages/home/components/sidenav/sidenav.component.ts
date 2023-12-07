import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() openSidenav: boolean = false;
  @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggleSidenav(isOpen: boolean): void {
    this.toggleSidenavEvent.emit(isOpen);
  }
}
