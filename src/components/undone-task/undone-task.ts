import { Component, Input } from "@angular/core";
import { Task } from "../../providers/task/schema";
import { TaskProvider } from "../../providers/task/task";

@Component({
  selector: "undone-task",
  templateUrl: "undone-task.html",
})
export class UndoneTaskComponent {
  // task object
  @Input() task: Task;

  constructor(private taskProvider: TaskProvider) {}

  // mark a todo item as done
  async markAsDone(id: string) {
    const loader = this.taskProvider.presentLoading();
    loader.present();
    try {
      const result = await this.taskProvider.markTodoAsDone(id);
      loader.dismiss();
      this.taskProvider.presentToast(result.message);
    } catch (e) {
      loader.dismiss();
      this.taskProvider.presentToast(e.message);
    }
  }

  // mark a todo item as done
  async deleteTodoItem(id: string) {
    const loader = this.taskProvider.presentLoading();
    loader.present();
    try {
      const result = await this.taskProvider.deleteTodo(id);
      loader.dismiss();
      this.taskProvider.presentToast(result.message);
    } catch (e) {
      loader.dismiss();
      this.taskProvider.presentToast(e.message);
    }
  }
}
