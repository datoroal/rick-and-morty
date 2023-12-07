import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FeaturesComponent } from './components/features/features.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    JumbotronComponent,
    SidenavComponent,
    FeaturesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
