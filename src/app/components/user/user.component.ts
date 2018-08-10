import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Properties
  user: User;

  constructor() {
    this.user = {
      firstName:'Devon',
      lastName: 'Anderson',
      age: 41,
      address: {
        street: '410 Marie Court',
        city: 'Athens',
        state: 'Georgia'
      }
    }
   }

  ngOnInit() {
    console.log('User OnInIt is working....')
  }

}


