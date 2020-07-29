import { Component } from "@angular/core";
import { NavController, AlertController, Platform } from "ionic-angular";
import { UnDonePage } from "../un-done/un-done";
import { DonePage } from "../done/done";
import { TaskProvider } from "../../providers/task/task";
import { ThemeProvider } from "../../providers/theme/theme";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  // tabs pages
  tabs: Object = {
    unDone: UnDonePage,
    done: DonePage,
  };

  // darktheme
  darkTheme: boolean = false;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private taskProvider: TaskProvider,
    private themeProvider: ThemeProvider,
    private plt: Platform,
    private storage: Storage
  ) {
    plt.ready().then(() => {
      this.storage.get("DARK_THEME").then((value) => {
        if (value) {
          this.darkTheme = true;
        }
      });
    });
  }

  // show add todo prompt
  showAlertPrompt() {
    const prompt = this.alertCtrl.create({
      title: "Add Todo",
      message: "Enter the thing to do!",
      inputs: [
        {
          name: "todo",
          placeholder: "What do you want to do?",
        },
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Save",
          handler: (data) => {
            this.addTodo(data.todo);
          },
        },
      ],
    });

    prompt.present();
  }

  async addTodo(text: string) {
    const loader = this.taskProvider.presentLoading();
    loader.present();

    try {
      const result = await this.taskProvider.addTodo(text);
      loader.dismiss();
      this.taskProvider.presentToast(result.message);
    } catch (error) {
      loader.dismiss();
      this.taskProvider.presentToast(error.message);
    }
  }

  // toggle dark theme
  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      this.themeProvider.enableDarkTheme();
    } else {
      this.themeProvider.disableDarkTheme();
    }
  }
}
