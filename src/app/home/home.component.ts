import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';
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

  public showMyDiv = false
  selectedItem: any;

  constructor(private _contactService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    this.contacts = this._contactService.getContacts()
  }


  // public index = -1
  displayDetails(i: number){
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

  onDeleteClick(){
    this.contacts.splice(index, 1)
  }


  updateCart(email: string) {
    this.selectedItem = email;
  }

  onEditClick(){
    this.router.navigate(['/add'])
    GlobalConstants.buttonValue = "Edit"
  }
}
