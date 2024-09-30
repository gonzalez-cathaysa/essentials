import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //This might not be set an I am aware of that
  //There is an alternative to use a question mark
  @Input() name?: string;
  // @Input() name: string | undefined;
}
