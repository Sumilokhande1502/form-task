import { Component } from '@angular/core';
import {User} from './User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud-App';

  users: User[];
  localItem;

  constructor() { 
    this.localItem = localStorage.getItem("users");
    if(this.localItem == null){
      this.users = [];
    } 
    else{
      this.users = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  addUser(user:User){
    console.log(user);
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));

  }

  deleteUser(user: User){
    console.log(user);
    const index = this.users.indexOf(user);
    console.log(index);
    
    this.users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

}
