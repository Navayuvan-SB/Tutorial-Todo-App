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
import { AngularFireAuthModule } from "angularfire2/auth";
import { DoneTaskComponent } from "../components/done-task/done-task";
import { ThemeProvider } from "../providers/theme/theme";

import { IonicStorageModule } from "@ionic/storage";
import { AuthProvider } from "../providers/auth/auth";
import { LoginPage } from "../pages/login/login";
import { ResponseViewsProvider } from "../providers/response-views/response-views";
import { SignupPage } from "../pages/signup/signup";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    DonePage,
    UnDonePage,
    UndoneTaskComponent,
    DoneTaskComponent,
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    SignupPage,
    DonePage,
    UnDonePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TaskProvider,
    ThemeProvider,
    AuthProvider,
    ResponseViewsProvider,
  ],
})
export class AppModule {}
