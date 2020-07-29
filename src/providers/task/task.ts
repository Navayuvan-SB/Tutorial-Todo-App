import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { ToastController, LoadingController } from "ionic-angular";

@Injectable()
export class TaskProvider {
  constructor(
    private db: AngularFirestore,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  // fetch all the todo item which is completed
  getDoneTodos() {
    const doneTodos = this.db.collection("todos").ref;
    return doneTodos.where("status", "==", true);
  }

  // fetch all the todo item which is incomplete
  getPendingTodos() {
    const doneTodos = this.db.collection("todos").ref;
    return doneTodos.where("status", "==", false);
  }

  // update todo status
  async markTodoAsDone(
    id: string
  ): Promise<{ status: boolean; message: string }> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.db.collection("todos").doc(id).update({
          status: true,
        });

        const response: { status: boolean; message: string } = {
          status: true,
          message: "Marked as done",
        };

        resolve(response);
      } catch (e) {
        console.log(e);
        const response: { status: boolean; message: string } = {
          status: false,
          message: e.message,
        };
        reject(response);
      }
    });
  }

  // delete todo item
  async deleteTodo(id: string): Promise<{ status: boolean; message: string }> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.db.collection("todos").doc(id).delete();

        const response: { status: boolean; message: string } = {
          status: true,
          message: "ToDo deleted",
        };

        resolve(response);
      } catch (e) {
        console.log(e);
        const response: { status: boolean; message: string } = {
          status: false,
          message: e.message,
        };
        reject(response);
      }
    });
  }

  // add todo item
  async addTodo(text: string): Promise<{ status: boolean; message: string }> {
    return new Promise(async (resolve, reject) => {
      try {
        let d = new Date();
        let n = String(d.getTime());

        await this.db.collection("todos").doc(n).set({
          status: false,
          text: text,
        });

        const response: { status: boolean; message: string } = {
          status: true,
          message: "ToDo added",
        };

        resolve(response);
      } catch (e) {
        console.log(e);

        const response: { status: boolean; message: string } = {
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
      position: "bottom",
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
