import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {User} from '../../User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  sr!: number;
  name!: string;
  email!: string;
  mobile!: number;
  about!: string;
  gender: any  ={
    male: 'male',
    female: 'female'
  }
  
  @Output() userAdd: EventEmitter<User> = new EventEmitter();

  ngOnInit(): void {
  }



  onSubmit(user:User){
    user = {
      sr: this.sr,
      name:this.name,
      gender:this.gender,
      email: this.email,
      mobile: this.mobile,
      about: this.about
    }
      this.userAdd.emit(user);
  }
  
  resetForm(user:User){
    this.resetForm(user);
  }
}
