import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';
import { AddComponent } from '../add/add.component';
export var index: number = -1

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public contacts: any = [];
  public name: string = ""
  public email: string = "";
  public mobile: number = 0 
  public landline: number = 0
  public website: string = ""
  public address: string = ""
  public highlightStyle = {}

  public showMyDiv = true
  public noContacts = false
  selectedItem: any;

  constructor(private _contactService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    this.contacts = this._contactService.getContacts()
    this.name = this.contacts[0].name
    this.email = this.contacts[0].email
    this.mobile = this.contacts[0].mobile
    this.landline = this.contacts[0].landline
    this.website = this.contacts[0].website
    this.address = this.contacts[0].address
    this.selectedItem = this.contacts[0].email
  }


  displayDetails(i = 0){
    try{
    let presentContact = this.contacts[i]
    this.name = presentContact.name 
    this.email = presentContact.email
    this.mobile = presentContact.mobile
    this.landline = presentContact.landline
    this.website = presentContact.website
    this.address = presentContact.address
    this.showMyDiv = true
    this.highlightStyle = {
      backgroundColor: "#CEE7F2"
    }
    index = i
  }
    catch(err){
      this.noContacts = true
    }
  }

  onDeleteClick(){
    this.contacts.splice(index, 1)
    this.showMyDiv = false
    this.displayDetails()
    this.updateCart(this.email)
  }


  updateCart(email: string) {
    this.selectedItem = email;
  }

  onEditClick(){
    this.router.navigate(['/add'])
    GlobalConstants.buttonValue = "Edit"
  }
}
