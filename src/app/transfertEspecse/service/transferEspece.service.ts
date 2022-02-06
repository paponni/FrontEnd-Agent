import { TransferEspece } from '../model/transferEspece';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from 'src/app/transfer/model/transfer';
import { EmissionData } from '../model/EmissionData';

@Injectable({
  providedIn: 'root',
})
export class TransferEspeceService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  private transferUrl: string;
  constructor(private http: HttpClient) {
    this.transferUrl = 'http://localhost:8088/AGENT-SERVICE/TransfertEmis';
  }
  public findByStatus(status: string): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(
      'http://localhost:8080/agent/transfertsByStatus/' + status
    );

    
  }
  public servirTransfert(emd:EmissionData) {
      return this.http.post<EmissionData>("http://localhost:8080/transferservice/emission/emissionByAgent", emd);
    }

  public save(transfer: TransferEspece) {
    return this.http.post<TransferEspece>(this.transferUrl , transfer);
  }
  getPDF(invoiceId: number): Observable<Blob> {
    return this.http.get<Blob>(this.transferUrl + 'PDF/' + invoiceId, {
      responseType: 'blob' as 'json',
    });
  }
}
