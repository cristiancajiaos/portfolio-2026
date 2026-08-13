import { Component, input } from '@angular/core';
import { ContactMedium } from '../../interfaces/contact-medium';

@Component({
  selector: 'app-single-contact',
  imports: [],
  templateUrl: './single-contact.html',
  styleUrl: './single-contact.css',
})
export class SingleContact {

  contact = input.required<ContactMedium>();
}
