import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { DonePage } from "../pages/done/done";
import { UnDonePage } from "../pages/un-done/un-done";
import { UndoneTaskComponent } from "../components/undone-task/undone-task";
import { TaskProvider } from "../providers/task/task";

import firebaseConfig from "../credentials/firebase";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { DoneTaskComponent } from "../components/done-task/done-task";

@NgModule({
  declarations: [MyApp, HomePage, DonePage, UnDonePage, UndoneTaskComponent, DoneTaskComponent],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, DonePage, UnDonePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TaskProvider,
  ],
})
export class AppModule {}
