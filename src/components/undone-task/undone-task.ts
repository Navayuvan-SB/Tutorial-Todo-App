import { Component } from '@angular/core';

/**
 * Generated class for the UndoneTaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'undone-task',
  templateUrl: 'undone-task.html'
})
export class UndoneTaskComponent {

  text: string;

  constructor() {
    console.log('Hello UndoneTaskComponent Component');
    this.text = 'Hello World';
  }

}
