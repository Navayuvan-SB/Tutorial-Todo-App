import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import { ResponseViewsProvider } from "../../providers/response-views/response-views";
import { LoginPage } from "../login/login";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
})
export class SignupPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authUtils: AuthProvider,
    private resViews: ResponseViewsProvider
  ) {}

  userDetails: { email: string; password: string } = {
    email: "",
    password: "",
  };

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  // login as user
  async signupUser() {
    const loading = this.resViews.getLoadingInstance();
    loading.present();

    try {
      const { email, password } = this.userDetails;
      const response = await this.authUtils.createUser(email, password);
      loading.dismiss();
      this.resViews.presentToast(response.message);
    } catch (error) {
      loading.dismiss();
      this.resViews.presentToast(error.message);
    }
  }

  // navigate to signup
  navToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
}
