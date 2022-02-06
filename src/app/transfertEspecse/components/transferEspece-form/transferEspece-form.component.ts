import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormArray, Validators } from '@angular/forms';
import { AccountService } from 'src/app/account/service/account.service';
import { Account } from 'src/app/account/model/account';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ClientService } from 'src/app/client/service/client.service';
import { Beneficiare } from '../../model/Beneficiare';
import { EmissionType, ModeCost, Transfer } from 'src/app/transfer/model/transfer';
import { TransferService } from 'src/app/transfer/service/transfer.service';
import { TransfertMulttipleBeneficiare } from 'src/app/transfer/model/TransfertMulttipleBeneficiare';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transferEspece-form.component.html',
  styleUrls: ['./transferEspece-form.component.css'],
})
export class TransferEspeceFormComponent implements OnInit {
  codeId: number;
  soldeAgent: string;
   BENEFICIAIRESS: any;
   frais:ModeCost[];
   selected:any;


  virementForm = new FormGroup({
    sommeTotal: new FormControl(0, Validators.required),
    
    listBenef: new FormArray([
        new FormControl('', Validators.required),
    ]),
    listBenef1: new FormArray([
      new FormControl('', Validators.required),
      ]),
    sommeBenef: new FormArray([
      new FormControl('', Validators.required),
    ]),
    

    
  })


  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private transferService: TransferService,
    private accountService: AccountService,
    public dialog: MatDialog,
    private clientService: ClientService
  ) {
    this.codeId = this.route.snapshot.params['id'];
    this.soldeAgent = sessionStorage.getItem('soldeAgent');
    
  }



  onSubmit() {
   // console.log(this.listBenef.value);
    //console.log(this.sommeBenef.value);
    // for (let i = 0; i < this.listBenef.length; i++) {
    //   console.log(this.listBenef.at(i).value);
    //   console.log(this.sommeBenef.at(i).value);
    // }
    
    
  }

  goToTransferComplete() {
  }

  ngOnInit(): void {

  }

  get sommeTotal() :FormControl {
    return this.virementForm.get('sommeTotal') as FormControl;
    }
  get listBenef() : FormArray {
    return this.virementForm.get('listBenef') as FormArray;
     
  }
  get listBenef1() : FormArray {
    return this.virementForm.get('listBenef1') as FormArray;
     
  }
  get sommeBenef() : FormArray {
    return this.virementForm.get('sommeBenef') as FormArray;
     
  }
  onFormSubmit(): void {
    
    let listVmb= new Array<TransfertMulttipleBeneficiare>() 
    let BENEFICIAIRES = new Array<Beneficiare>();
    let TRANSFERTS = new Array<Transfer>();

    let listebenefs:Beneficiare;
    for (let i = 0; i < this.listBenef.length; i++) {
      listebenefs = {
        numIdentite: this.listBenef.at(i).value ,
      } }
      for (let i = 0; i < this.listBenef1.length; i++) {
        listebenefs  = {
          gsm: this.listBenef1.at(i).value ,
  
        }   } 
        for(let j=0 ;j<this.listBenef1.length;j++){
          let benefComplet :Beneficiare ={
            numIdentite: this.listBenef.at(j).value ,
            gsm: this.listBenef1.at(j).value ,
          }
          BENEFICIAIRES.push(benefComplet);
        }
        let sommeBenef = new Array<number>();
        for(let i = 0 ; i<this.sommeBenef.length;i++){
          sommeBenef.push(this.sommeBenef.at(i).value);
        } 
          
        console.log("somme benef "+sommeBenef);
      //   for (let i = 0; i < this.listBenef.length; i++) {

      //     let vmb: TransfertMulttipleBeneficiare = {
      //   numIdentite: this.listBenef.at(i).value ,
      //   gsm: this.listBenef.at(i).value ,
      //   solde :  this.sommeBenef.at(i).value
      // }
      
      
      console.log(BENEFICIAIRES)
      // listVmb.push(vmb);
    // }
   //  console.log(listVmb);
   // console.log(this.sommeTotal);
    
    this.http.post("http://localhost:8080/client/addBenefs/" , BENEFICIAIRES).subscribe(
      (data) => {
        console.log(data);
        let indicesBenefs = new Array<number>();
        this.BENEFICIAIRESS=data;
        for(let i = 0 ; i<this.BENEFICIAIRESS.length;i++){
          indicesBenefs.push(this.BENEFICIAIRESS[i].id);
        }
        console.log("1 :"+this.BENEFICIAIRESS[0].id)


        console.log(indicesBenefs);
        console.log(this.codeId);
        let listTransfert = new Array<Transfer>();
        for(let i=0; i<this.sommeBenef.length;i++){
          let transfer : Transfer={
            clientSrc : this.codeId,
            clientDst :indicesBenefs[i],
            montant : sommeBenef[i],
            modeCost:ModeCost.Destination,
            mode:EmissionType.ByAgent,

            
            
          };
          listTransfert.push(transfer);
          console.log(listTransfert);

        }





        this.http.post("http://localhost:8080/agent/servirTransfertEspeceMult/"+sessionStorage.getItem("currentAgentId") , listTransfert).subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['transferByStatus/']);

          },
          (error) => console.log(error)
        );

      },
      (error) => console.log(error)
    );




    console.log(listVmb);
    this.listBenef.reset();
    this.sommeBenef.reset();


  }

  addNameField() { 
    this.listBenef.push(new FormControl('', Validators.required));
    this.sommeBenef.push(new FormControl('', Validators.required));
    this.listBenef1.push(new FormControl('', Validators.required));

    
}

deleteNameField(index: number) {
    if (this.listBenef.length !== 1) { 
      this.listBenef.removeAt(index); 
    }
    if (this.sommeBenef.length !== 1) { 
      this.sommeBenef.removeAt(index); 
    }
}


  openDialog(): void {
    console.log('salam');
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Confirmer ce transfert?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onSubmit();
      }
    });
  }

  getStatusFrais(frais:ModeCost){
    this.selected=frais;
  }
}
