import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { ToastController, LoadingController } from "ionic-angular";
import { Response } from "./schema";
import { AuthProvider } from "../auth/auth";

@Injectable()
export class TaskProvider {
  currentUid: string;

  constructor(
    private db: AngularFirestore,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private authUtils: AuthProvider
  ) {
    this.authUtils.getCurrentUser().then((user) => {
      this.currentUid = user.uid;
    });
  }

  // fetch all the todo item which is completed
  getDoneTodos() {
    const doneTodos = this.db.collection("todos").ref;
    return doneTodos
      .where("status", "==", true)
      .where("uid", "==", this.currentUid);
  }

  // fetch all the todo item which is incomplete
  getPendingTodos() {
    const doneTodos = this.db.collection("todos").ref;
    return doneTodos
      .where("status", "==", false)
      .where("uid", "==", this.currentUid);
  }

  // update todo status
  async markTodoAsDone(id: string): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.db.collection("todos").doc(id).update({
          status: true,
        });

        const response: Response = {
          status: true,
          message: "Marked as done",
        };

        resolve(response);
      } catch (e) {
        console.log(e);
        const response: Response = {
          status: false,
          message: e.message,
        };
        reject(response);
      }
    });
  }

  // delete todo item
  async deleteTodo(id: string): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.db.collection("todos").doc(id).delete();

        const response: Response = {
          status: true,
          message: "ToDo deleted",
        };

        resolve(response);
      } catch (e) {
        console.log(e);
        const response: Response = {
          status: false,
          message: e.message,
        };
        reject(response);
      }
    });
  }

  // add todo item
  async addTodo(text: string): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        let d = new Date();
        let n = String(d.getTime());

        await this.db.collection("todos").doc(n).set({
          status: false,
          text: text,
          uid: this.currentUid,
        });

        const response: Response = {
          status: true,
          message: "ToDo added",
        };

        resolve(response);
      } catch (e) {
        console.log(e);

        const response: Response = {
          status: false,
          message: e.message,
        };
        reject(response);
      }
    });
  }

  // present toast
  presentToast(message: string) {
    const toast = this.toastController.create({
      message: message,
      duration: 3000,
      position: "top",
    });
    toast.present();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });

    return loader;
  }
}
