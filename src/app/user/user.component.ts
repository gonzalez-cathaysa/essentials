import { Component, Input, Output, EventEmitter } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

//With interface we can define only object types and with type keyword you can define other types
interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //We are not creating a user, we are only creating a type
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
