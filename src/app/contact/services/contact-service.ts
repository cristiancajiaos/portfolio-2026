import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ContactMedium } from '../interfaces/contact-medium';

@Service()
export class ContactService {

  private http = inject(HttpClient);

  private mapContacts = new Map<string, ContactMedium[] | undefined>;

  getContacts(): Observable<ContactMedium[] | undefined> {
    if (this.mapContacts.has('contacts')) {
      return of(this.mapContacts.get('contacts'));
    }
    
    return this.http.get<ContactMedium[]>(`assets/json/contacts.json`).pipe(
      tap(contactMediums => this.mapContacts.set('contacts', contactMediums))
    )
  }
}
