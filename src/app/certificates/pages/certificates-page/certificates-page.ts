import { Component, inject } from '@angular/core';
import { CertificateService } from '../../services/certificate-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { SingleCertificate } from '../../components/single-certificate/single-certificate';
import { Loading } from '../../../shared/components/loading/loading';

@Component({
  selector: 'app-certificates-page',
  imports: [SingleCertificate, Loading],
  templateUrl: './certificates-page.html',
  styleUrl: './certificates-page.css',
})
export class CertificatesPage {

  private certificateService = inject(CertificateService);

  certificateResource = rxResource({
    params: () => {
      return {foo: 'foo'}
    },
    stream: ({params}) => {
      return this.certificateService.getCertificates();
    }
  });
}
