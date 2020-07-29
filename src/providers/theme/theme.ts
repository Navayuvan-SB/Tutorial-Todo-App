import { Injectable } from "@angular/core";

/*
  Generated class for the ThemeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ThemeProvider {
  ionApp = document.getElementsByTagName("ion-app");

  constructor() {}

  // enable the dark theme
  enableDarkTheme() {
    this.ionApp[0].classList.add("dark-theme");
  }

  // disable the dark theme
  disableDarkTheme() {
    this.ionApp[0].classList.remove("dark-theme");
  }
}
