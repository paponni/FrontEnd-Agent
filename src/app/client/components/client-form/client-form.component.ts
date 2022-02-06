import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Client } from '../../model/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  client: Client;
  clients: Client[];
  clientForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    cne: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    

  });
 
  

  get firstName() {
    return this.clientForm.get('firstName');
  }

  get secondName() {
    return this.clientForm.get('secondName');
  }
  get cne() {
    return this.clientForm.get('cne');
  }

  get phone() {
    return this.clientForm.get('phone');
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.client = this.clientForm.value;
    console.log(this.client);
    this.clientService
      .save(this.client)
      .subscribe((result) => this.gotoClientList());
  }

  gotoClientList() {
    this.router.navigate(['/clients']);
  }

  reset() {
    this.clientForm.reset();
  }
}
