import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Platform } from "ionic-angular";

/*
  Generated class for the ThemeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ThemeProvider {
  ionApp = document.getElementsByTagName("ion-app");

  constructor(private storage: Storage, private plt: Platform) {
    plt.ready().then(() => {
      if (this.storage.get("DARK_THEME")) {
        this.storage.get("DARK_THEME").then((value) => {
          if (value) {
            this.enableDarkTheme();
          }
        });
      }
    });
  }

  // enable the dark theme
  enableDarkTheme() {
    this.ionApp[0].classList.add("dark-theme");
    this.storage.set("DARK_THEME", true);
  }

  // disable the dark theme
  disableDarkTheme() {
    this.ionApp[0].classList.remove("dark-theme");
    this.storage.set("DARK_THEME", false);
  }
}
