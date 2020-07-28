import { Component, Input } from '@angular/core';
import { Task } from '../../providers/task/schema';

/**
 * Generated class for the DoneTaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'done-task',
  templateUrl: 'done-task.html'
})
export class DoneTaskComponent {

  // task object
  @Input() task: Task;

  constructor() {
    
  }

}
