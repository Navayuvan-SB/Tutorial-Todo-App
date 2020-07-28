import { Injectable } from "@angular/core";
import { Task } from "./schema";

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {
  tasks: Array<Task> = [
    { id: "1", status: false, text: "Hey, this is my first todo" },
  ];

  constructor() {
    console.log("Hello TaskProvider Provider");
  }

  getTodos(): Array<Task> {
    return this.tasks;
  }
}
