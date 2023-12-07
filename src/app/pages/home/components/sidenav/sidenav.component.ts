import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit, OnDestroy {
  @Input() openSidenav: boolean = false;
  @Output() toggleSidenavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public formSearch: FormControl<string | null> = new FormControl<string | null>('');
  private formSearchSubscription?: Subscription;

  public toggleSidenav(isOpen: boolean): void {
    this.toggleSidenavEvent.emit(isOpen);
  }

  private setFormSearchSubscription(): void {
    this.formSearchSubscription =
      this.formSearch.valueChanges.subscribe((value: string | null) => {
        console.log(value);
      });
  }

  ngOnInit(): void {
    this.setFormSearchSubscription();
  }

  ngOnDestroy(): void {
    this.formSearchSubscription?.unsubscribe();
  }
}
