import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
    public contacts: any = [
    {"name": "Harsha Vardhan Pendyala", "email": "harsha@fosterate.com", "mobile": 7777888855, "landline": "", "website": "", "address": "   hyderabad\n\t\t\tTelangana\n\t\t\t500061"},

    {"name": "Network Duke", "email": "duke@fosterate.com", "mobile": 7777888855, "landline": "", "website": "", "address":  "   hyderabad\n\t\t\tTelangana\n\t\t\t500061"},

    {"name": "Arshaque Mohammed", "email": "arshaque@fosterate.com", "mobile": 7777888855, "landline": "", "website": "", "address": "   hyderabad\n\t\t\tTelangana\n\t\t\t500061"},

  ]
  constructor() { }

  getContacts(){
    return this.contacts
  }
}
