import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiare } from 'src/app/transfer/model/Beneficiare';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-benef-form',
  templateUrl: './benef-form.component.html',
  styleUrls: ['./benef-form.component.css']
})
export class BenefFormComponent implements OnInit {
  
  benef:Beneficiare;
  benefForm = new FormGroup({
    pieceIdentite: new FormControl('', Validators.required),
    numIdentite: new FormControl('', Validators.required),
    gsm: new FormControl('', Validators.required),
    blackLister: new FormControl(''),

  });

  get pieceIdentite() {
    return this.benefForm.get('pieceIdentite');
  }

  get numIdentite() {
    return this.benefForm.get('numIdentite');
  }
  get gsm() {
    return this.benefForm.get('gsm');
  }

  get blackLister() {
    return this.benefForm.get('blackLister');
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.benef = this.benefForm.value;
    console.log(this.benef);
    this.clientService
      .saveBenef(this.benef)
      .subscribe((result) => this.gotoBenefList());
  }

  gotoBenefList() {
    this.router.navigate(['/clients']);
  }

  reset() {
    this.benefForm.reset();
  }

}
