import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import { ResponseViewsProvider } from "../../providers/response-views/response-views";
import { SignupPage } from "../signup/signup";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
})
export class LoginPage {
  userDetails: { email: string; password: string } = {
    email: "",
    password: "",
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authUtils: AuthProvider,
    private resViews: ResponseViewsProvider
  ) {}

  ionViewDidLoad() {}

  // login as user
  async loginUser() {
    const loading = this.resViews.getLoadingInstance();
    loading.present();

    try {
      const { email, password } = this.userDetails;
      const response = await this.authUtils.loginUser(email, password);
      loading.dismiss();
      this.resViews.presentToast(response.message);
    } catch (error) {
      loading.dismiss();
      this.resViews.presentToast(error.message);
    }
  }

  // navigate to signup
  navToSignup() {
    this.navCtrl.setRoot(SignupPage);
  }
}
