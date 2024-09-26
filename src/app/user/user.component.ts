import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Property settable from outside
  // @Input() avatar!:string;
  // @Input() name!: string;

  // @Input({required: true}) avatar!:string;
  // @Input({required: true}) name!: string;

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath=computed(()=>'assets/users/'+this.selectedUser().avatar)
  // // get imagePath(){
  // //   return 'assets/users/'+this.selectedUser.avatar
  // // }

  // avatar = input();
  // avatar = input<string>('');
  avatar = input.required<string>(); //Now are signals
  name = input.required<string>(); //Now are signals

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  // get imagePath(){
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {

    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}


