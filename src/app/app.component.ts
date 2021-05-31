import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Crud-App';

 appState = 'default';
  localItem: any;

  public formDetails: any = {
    name: '',
    hobbies: new Array(),
    gender: {
      male: '',
      female: '',
    },
    email: '',
    mobile: '',
    about: ''
  };
  
  indexFetch: any;
  searchText:any;
  formData: any[] = [];
  

  constructor( ) {

    
    this.localItem = localStorage.getItem('users');
    if (this.localItem == null) {
      this.formData = [];
    } else {
      this.formData = JSON.parse(this.localItem);
    }

    this.addHobby()
  }

  ngOnInit(): void { 
  }

  addUser() { 
   
    
    this.formData.push(this.formDetails);
    console.log(this.formData);
    localStorage.setItem('users', JSON.stringify(this.formData));       
  }

  deleteUser(user: any) {
    // console.log(user);
    const index = this.formData.indexOf(user);
    console.log(index);

    this.formData.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.formData));
  }

  fetchData(user: any) {
    this.appState = 'edit';

    Object.keys(user).forEach((key) => {
      this.formDetails['name'] = user['name'];
      this.formDetails['gender'] = user['gender'];
      this.formDetails['email'] = user['email'];
      this.formDetails['mobile'] = user['mobile'];
      this.formDetails['about'] = user['about'];
      this.formDetails['hobbies'] = user['hobbies'];
    });
  console.log(user, 'From FetchData');
    
    this.indexFetch = this.formData.indexOf(user);
    console.log(this.indexFetch);
  }

  updateUser() {
    this.formData[this.indexFetch].name = this.formDetails.name;
    this.formData[this.indexFetch].gender = this.formDetails.gender;
    this.formData[this.indexFetch].email = this.formDetails.email;
    this.formData[this.indexFetch].mobile = this.formDetails.mobile;
    this.formData[this.indexFetch].about = this.formDetails.about;
    this.formData[this.indexFetch].hobbies.hobbyList = this.formDetails.hobbies.hobbyList;

    localStorage.setItem('users', JSON.stringify(this.formData));
  }

  removevalue(i: any){
    this.formDetails.hobbies.splice(i,1);
  }

  addHobby(){

    if(this.formDetails.hobbies){
      this.formDetails.hobbies.push({hobbyList: ""});
     }
     //else{
    //   this.formDetails.hobbies = [];
    // }    
  }

cancelEdit(){
  this.appState = 'default';
}

resetForm(){
  this.formDetails = []
}

}
