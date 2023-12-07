import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FeaturesComponent } from './components/features/features.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from '../../shared/paginator/paginator.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    JumbotronComponent,
    SidenavComponent,
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PaginatorModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
