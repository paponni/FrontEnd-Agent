import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { Beneficiare } from 'src/app/transfer/model/Beneficiare';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  private clientUrl1: string;
  private benefUrl:string;
  private benef1Url:string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/client/clients';
    this.clientUrl1 = 'http://localhost:8080/client/';
    this.benefUrl='http://localhost:8080/client/beneficiaire';
    this.benef1Url='http://localhost:8080/client/';

  }
  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(
      this.clientUrl
    );
  }
  public findAllBenef(): Observable<Beneficiare[]> {
    return this.http.get<Beneficiare[]>(
      this.benefUrl+"s"
    );
  }
  public findClient(code: String): Observable<Client> {
    return this.http.get<Client>(this.clientUrl1 + '/client' + code);
  }

  public save(client: Client) {
    return this.http.post<Client>(this.clientUrl1+"addclient" , client);
  }
  
  public saveBenef(benef: Beneficiare) {
    return this.http.post<Beneficiare>(this.benef1Url+"addBenef", benef);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.clientUrl1}${id}`);
  }
  deleteBenef(id: number): Observable<any> {
    return this.http.delete(`${this.clientUrl1}/beneficiare/${id}`);
  }

  // sus_act(id: number): Observable<any> {
  //   return this.http.put(this.clientUrl +'/sus_act/' + id, {});
  //   }

}
