import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Agent } from 'src/app/shared/models/agent';
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private httpClient: HttpClient) {}

  authentificate(ag) {
    return this.httpClient
      .post<Agent>('http://localhost:8080/agent/login/',ag)
      .pipe(
        map((userData) => {
          sessionStorage.setItem('username', userData.username);
          sessionStorage.setItem('soldeAgent', userData.soldeAgent.toString());
          sessionStorage.setItem('name', userData.password);
          sessionStorage.setItem('pointdevente', userData.pointdevente.id.toString());
          sessionStorage.setItem('currentAgentId', userData.id.toString());
          console.log(userData);

          return userData;

        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('soldeAgent');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('currentAgentId');
    sessionStorage.removeItem('pointdevente');
  }
}
