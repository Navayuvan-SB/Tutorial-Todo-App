import { Injectable } from "@angular/core";
import { Task, Response } from "./schema";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class TaskProvider {
  constructor(private db: AngularFirestore) {}

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
  async markTodoAsDone(id: string): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.db.collection("todos").doc(id).update({
          status: true,
        });

        resolve({
          status: true,
          message: "Marked as done",
        });
      } catch (e) {
        console.log(e);
        reject({
          status: false,
          message: e.message,
        });
      }
    });
  }

  // delete todo item
  async deleteTodo(id: string): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.db.collection("todos").doc(id).delete();

        resolve({
          status: true,
          message: "Todo deleted!",
        });
      } catch (e) {
        console.log(e);
        reject({
          status: false,
          message: e.message,
        });
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
        });

        resolve({
          status: true,
          message: "ToDo added",
        });
      } catch (e) {
        console.log(e);
        reject({
          status: false,
          message: e.message,
        });
      }
    });
  }
}
