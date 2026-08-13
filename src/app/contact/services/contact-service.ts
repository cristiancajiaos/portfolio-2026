import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMedium } from '../interfaces/contact-medium';

@Service()
export class ContactService {

  private http = inject(HttpClient);

  getContacts(): Observable<ContactMedium[]> {
    return this.http.get<ContactMedium[]>(`assets/json/contacts.json`);
  }
}
