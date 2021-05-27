import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Crud-App';

  name:any;
  gender:any;
  email:any;
  mobile:any;
  about:any;

  public users:User[] = [];

  localItem:any;

  // public formDetails: any = {
  // name: '',
  // email: '',
  // mobile: '',
  // about: '',
  // gender: {
  //   male : '',
  //   female: ''
  // }
  // }

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
    // if(localStorage.getItem('users')){
    //  // console.log(JSON.parse(localStorage.getItem('users')) || '{}'); 
    //  // this.users.push(JSON.parse(localStorage.getItem('data')));
    // }
  }

  onSubmit() {
    //this.users.push(this.user)
    //localStorage.setItem("users", JSON.stringify(this.users));
    // if(localStorage.getItem('data') === null || localStorage.getItem('data') == undefined) {
    //   const userData = [];
    //   userData.push(this.formDetails);
    //   console.log(userData, 'details from Main compo');
    //   localStorage.setItem('data', JSON.stringify(userData));
    //   return userData;
    // }
    // else{
    //   const userData = [];
    //   this.formDetails.name = 'Sumit',
    //   this.formDetails.gender = 'Male',
    //   this.formDetails.email = 'abc@email',
    //   this.formDetails.mobile = '2147198247',
    //   this.formDetails.about = 'lorem',
      
    //   userData.push(this.formDetails);
    //   console.log(userData, 'details from form compo');
    //   localStorage.setItem('data', JSON.stringify(userData));
    //   return userData;
    // }
    
  }
  addUser(user:any){
    console.log(user);
    this.users.push(user)
    localStorage.setItem("users", JSON.stringify(this.users));

  }
  deleteUser(user: any) {
    console.log(user);
    const index = this.users.indexOf(user);
    console.log(index);

    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  updateUser(update:any){
    console.log('User Updated');
    console.log(update, 'update from modal');
    
  }
  
  resetForm(user:User){
    this.resetForm(user);
  }
}
