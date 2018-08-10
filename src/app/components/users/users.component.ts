import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      // {
      //   firstName: 'Devon',
      //   lastName: 'Anderson',
      //   age: 41,
      //   address: {
      //     street: '410 Marie Court',
      //     city: 'Athens',
      //     state: 'Georgia'
      //   }
      // },
      // {
      //   firstName: 'Courtney',
      //   lastName: 'Palette',
      //   age: 32,
      //   address: {
      //     street: '125 Marie Court',
      //     city: 'Jefferson',
      //     state: 'Georgia'
      //   }
      // },
      // {
      //   firstName: 'AJ',
      //   lastName: 'Palette',
      //   age: 6,
      //   address: {
      //     street: '456 Beyblade Court',
      //     city: 'Commerce',
      //     state: 'Georgia'
      //   }
      // }
    ];

    this.showExtended = false;

    // this.addUser({
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   age: 6,
    //   address: {
    //     street: '123 Hello World',
    //     city: 'Athens',
    //     state: 'Georgia'
    //   }
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
