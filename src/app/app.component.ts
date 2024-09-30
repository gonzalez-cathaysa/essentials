import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'essentials';
  //We set users as a subset of users
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    //If we don't use ! we obtain undefined and we will run on an error in app-tasks [name]="selectedUser.name
    //Maybe we have the situation where we don't find an user id, I should be careful adding ! Instead in situations
    //where you maybe can't be 100% that you will have a value it's often better to ser up some fallback code
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    // console.log('Selected user with id ' + id);
  }
}
