import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactsService } from '../services/contacts.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})

export class ContactsComponent  implements OnInit{
  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  }

  constructor(private contactService:ContactsService, private auth:AuthService, private router:Router){}

  public contacts:any;

  state: string = 'active';

  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  company = '';

  ngOnInit(): void {
    this.getAllContacts()
    this.state
    // this.seDeconneter()
  }

  getAllContacts(){
    return this.contactService.getContacts().subscribe(
      (contacts)=>{
      this.contacts=contacts
      },
      (err)=>console.error(err)
    ); 
  }

  addNewContact(value:any){
    return this.contactService.addContact(value).subscribe(
      (contacts)=>{
        this.getAllContacts();
        return true
      },
      (err)=>{
        console.error("Echec de l'envoie de la donnée", err);
      }
    ); 
  }

  seDeconnecter(){
    this.auth.logout();
    console.log('Utilisateur déconnecté');
    this.router.navigate(['/login']);
  }
}
