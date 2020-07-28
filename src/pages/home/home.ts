import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UnDonePage } from "../un-done/un-done";
import { DonePage } from "../done/done";

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

  constructor(public navCtrl: NavController) {}
}
