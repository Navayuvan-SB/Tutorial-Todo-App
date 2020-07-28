import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TaskProvider } from "../../providers/task/task";
import { Task } from "../../providers/task/schema";

/**
 * Generated class for the DonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-done",
  templateUrl: "done.html",
})
export class DonePage {
  tasks: Array<Task> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public taskProvider: TaskProvider
  ) {}

  ionViewDidLoad() {
    this.getDoneTodo();
  }

  getDoneTodo() {
    const doneTodos = this.taskProvider.getDoneTodos();
    doneTodos.onSnapshot((snapshot) => {
      snapshot.docChanges.forEach((todo) => {
        if (todo.type === "added") {
          this.tasks.push({
            id: todo.doc.id,
            status: todo.doc.data().status,
            text: todo.doc.data().text,
          });
        }
        if (todo.type === "removed") {
          this.tasks = this.tasks.filter(function (item) {
            return item.id !== todo.doc.id;
          });
        }
      });
    });
  }
}
