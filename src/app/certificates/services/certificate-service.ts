import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from '../interfaces/certificate';

@Service()
export class CertificateService {

  private http = inject(HttpClient);

  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`assets/json/certificates.json`);
  }
}
