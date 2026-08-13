import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Certificate } from '../interfaces/certificate';

@Service()
export class CertificateService {

  private http = inject(HttpClient);

  private mapCertificates = new Map<string, Certificate[] | undefined>;

  getCertificates(): Observable<Certificate[] | undefined> {
    if (this.mapCertificates.get('certificates')) {
      return of(this.mapCertificates.get('certificates'))
    }

    return this.http.get<Certificate[]>(`assets/json/certificates.json`).pipe(
      tap(certificates => this.mapCertificates.set('certificates', certificates))
    )
  }
}
