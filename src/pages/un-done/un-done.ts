import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Task } from "../../providers/task/schema";
import { TaskProvider } from "../../providers/task/task";

/**
 * Generated class for the UnDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-un-done",
  templateUrl: "un-done.html",
})
export class UnDonePage {
  // task objects
  tasks: Array<Task> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskProvider: TaskProvider
  ) {}

  ionViewDidLoad() {
    // this.tasks = this.taskProvider.getTodos();
    this.getUnDoneTodo();
  }

  getUnDoneTodo() {
    const doneTodos = this.taskProvider.getPendingTodos();

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
