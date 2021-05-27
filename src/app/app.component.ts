import { Component, OnInit } from '@angular/core';
import { User } from './User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Crud-App';

  public users:User[] = [];

  localItem:any;

  public formDetails: any = {
  name: '',
  gender: {
    male : '',
    female: ''
  },
  email: '',
  mobile: '',
  about: ''
  
  }
  indexFetch: any;

  constructor() { 
    this.localItem = localStorage.getItem("users");
    if(this.localItem == null){
      this.formDetails = [];
    } 
    else{
      this.formDetails = JSON.parse(this.localItem);
    }
  }


  ngOnInit(): void {
    // if(localStorage.getItem('users')){
    //  // console.log(JSON.parse(localStorage.getItem('users')) || '{}'); 
    //  // this.formDetails.push(JSON.parse(localStorage.getItem('data')));
    // }
  }


  addUser(user:any){
    console.log(user);
    this.formDetails.push(user)
    localStorage.setItem("users", JSON.stringify(this.formDetails));

  }
  deleteUser(user: any) {
    console.log(user);
    const index = this.formDetails.indexOf(user);
    console.log(index);

    this.formDetails.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.formDetails));
  }

  updateUser(user:any){
    // this.formDetails.filter(this.indexFetch == this.formDetails[this.indexFetch])
  //   console.log(user);
  //   console.log(this.indexFetch, 'from update function');
  //  console.log(this.formDetails[this.indexFetch].name, user.name);
  
     this.formDetails[this.indexFetch].name = user.name
     this.formDetails[this.indexFetch].gender = user.gender
     this.formDetails[this.indexFetch].email = user.email
     this.formDetails[this.indexFetch].mobile = user.mobile
     this.formDetails[this.indexFetch].about = user.about

      localStorage.setItem('users', JSON.stringify(this.formDetails));

    
  }
  
  fetchData(user: any){
    Object.keys(user).forEach((key) => {
         this.formDetails['name'] = user['name'];
         this.formDetails['gender'] = user['gender'];
         this.formDetails['email'] = user['email'];
         this.formDetails['mobile'] = user['mobile'];
         this.formDetails['about'] = user['about'];
    });
    this.indexFetch = this.formDetails.indexOf(user);
    console.log(this.indexFetch);

  }
}
