import { Component, Input } from "@angular/core";
import { Task } from "../../providers/task/schema";

/**
 * Generated class for the UndoneTaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "undone-task",
  templateUrl: "undone-task.html",
})
export class UndoneTaskComponent {
  // task object
  @Input() task: Task;

  constructor() {}
}
