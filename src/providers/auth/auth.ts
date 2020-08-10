import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthResponse } from "./auth.models";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {
  constructor(private afAuth: AngularFireAuth) {}

  // create an user
  async createUser(email: string, password: string): Promise<AuthResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.afAuth.auth.createUserWithEmailAndPassword(
          email,
          password
        );

        resolve({
          uid: response.uid,
          message: "User created successfully!",
        });
      } catch (e) {
        reject({
          uid: null,
          message: e.message,
        });
      }
    });
  }

  // login an user
  async loginUser(email: string, password: string): Promise<AuthResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.afAuth.auth.signInWithEmailAndPassword(
          email,
          password
        );

        resolve({
          uid: response.uid,
          message: "User logged in successfully!",
        });
      } catch (e) {
        reject({
          uid: null,
          message: e.message,
        });
      }
    });
  }

  // check if the user logged in already
  async getCurrentUser(): Promise<AuthResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        this.afAuth.authState.subscribe((user) => {
          resolve({
            uid: user.uid,
            message: "User logged in",
          });
        });
      } catch (e) {
        reject({
          uid: null,
          message: e.message,
        });
      }
    });
  }
}
