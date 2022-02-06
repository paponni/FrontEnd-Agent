import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../service/account.service';
import { Client } from 'src/app/client/model/client';
import { ClientService } from 'src/app/client/service/client.service';
import { Account } from '../../model/account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent implements OnInit {
  codeId: any;
  client: Client;
  account: Account;
  accounts: Account[];
  accountForm = new FormGroup({
    numero: new FormControl('', Validators.required),
    solde: new FormControl('', Validators.required),
    pin: new FormControl('', Validators.required),


  });
  

 /*  get devise() {
    return this.accountForm.get('devise');
  } */
  get numero() {
    return this.accountForm.get('numero');
  }
  get pin() {
    return this.accountForm.get('pin');
  }
  get solde() {
    return this.accountForm.get('solde');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private clientService: ClientService,
  ) {}

  ngOnInit(): void {
    this.codeId = this.route.snapshot.params['id'];
    // this.clientService.findClient(this.codeId).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.client = data[0];
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  onSubmit() {
    this.account = this.accountForm.value;
    this.account.client=this.codeId;
    
    console.log(this.account);
    this.accountService
      .save(this.account)
      .subscribe((result) => this.gotoAccountList());
  }

  gotoAccountList() {
    this.router.navigate(['/client/' + this.codeId + '/accounts']);
  }

  reset() {
    this.accountForm.reset();
  }
}
