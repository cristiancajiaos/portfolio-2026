import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { SingleContact } from '../../components/single-contact/single-contact';
import { Loading } from '../../../shared/components/loading/loading';

@Component({
  selector: 'app-contact-page',
  imports: [SingleContact, Loading],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

  private contactService = inject(ContactService);

  contactResource = rxResource({
    params: () => {
      return {foo: 'foo'}
    },
    stream: () => {
      return this.contactService.getContacts();
    }
  });
}
