import { Component, input } from '@angular/core';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-single-certificate',
  imports: [],
  templateUrl: './single-certificate.html',
  styleUrl: './single-certificate.css',
})
export class SingleCertificate {

  certificate = input.required<Certificate>();
}
