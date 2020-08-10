import { Injectable } from "@angular/core";
import { ToastController, LoadingController } from "ionic-angular";

/*
  Generated class for the ResponseViewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResponseViewsProvider {
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  // present the toast message
  presentToast(message: string): void {
    const toast = this.toastCtrl.create({
      duration: 2500,
      message: message,
      position: "bottom",
    });

    toast.present();
  }

  getLoadingInstance(): any {
    const loading = this.loadingCtrl.create({
      content: "Please wait",
    });

    return loading;
  }
}
