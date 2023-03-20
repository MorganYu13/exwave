import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';


import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {NgxObserversModule} from "ngx-observers";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThemesComponent } from './themes/themes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GalleryComponent,
    LoginComponent,
    RegisterComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxObserversModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
