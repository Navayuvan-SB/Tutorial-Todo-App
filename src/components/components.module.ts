import { NgModule } from '@angular/core';
import { UndoneTaskComponent } from './undone-task/undone-task';
import { DoneTaskComponent } from './done-task/done-task';
@NgModule({
	declarations: [UndoneTaskComponent,
    DoneTaskComponent],
	imports: [],
	exports: [UndoneTaskComponent,
    DoneTaskComponent]
})
export class ComponentsModule {}
