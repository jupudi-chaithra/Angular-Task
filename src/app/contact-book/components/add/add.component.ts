import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalConstants } from '../../common/global-constants';
import { index } from '../home/home.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  public noContacts = false
  public contacts: any = [];
  
  constructor(private _contactService: ContactsService, private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.contacts = this._contactService.getContacts()
    this.checkEmptyArray()
    this.checkButtonValue()
  }

  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    landline: ['',],
    website: [''],
    address: [''],
  }) 

  checkEmptyArray(){
    if(this.contacts.length == 0)
      this.noContacts = true
  }


  buttonValue = GlobalConstants.buttonValue

  public giveFormValue(){
    console.log(this.registrationForm.controls)
  }

  checkButtonValue(){
    if(this.buttonValue == "Edit"){
     this.registrationForm = this.fb.group({
        name: [this.contacts[index].name , Validators.required],
        email: [this.contacts[index].email, Validators.required],
        mobile: [this.contacts[index].mobile, Validators.required],
        landline: [this.contacts[index].landline,],
        website: [this.contacts[index].website],
        address: [this.contacts[index].address],
      }) 
    }
  }

  onSubmit(){
    if(this.registrationForm.value.name === '' || this.registrationForm.value.email === '' || this.registrationForm.value.mobile === '')
    {
      window.alert('Fill all required fields')
    }
    else{
      if (this.buttonValue == "Add")
        this.contacts.push(this.registrationForm.value)
      else if(this.buttonValue == "Edit")
        {
          this.contacts[index] = this.registrationForm.value
        }
    }
    this.noContacts=false
  }
}
