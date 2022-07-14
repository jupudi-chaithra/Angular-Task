import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services/contacts.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [ContactsService],
})
export class ContactBookModule { }
