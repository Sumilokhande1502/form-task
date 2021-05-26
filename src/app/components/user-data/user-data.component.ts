import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {User} from '../../User';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input()
  user!: User;
  @Input()
  sr!: number;

  @Output() userDelete : EventEmitter<User>= new EventEmitter();
  @Output() userEdit : EventEmitter<User>= new EventEmitter();

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

  onDelete(user:User){
    this.userDelete.emit(user);
  }

  onEdit(user:User){
    const index = this.users.indexOf(user);
    console.log(index);
    this.userEdit.emit(user);
  }

}
