import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferEspece } from '../../model/transferEspece';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TransferEspeceService } from '../../service/transferEspece.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/account/model/account';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/client/service/client.service';
import { Client } from 'src/app/client/model/client';
import { Status, Transfer } from 'src/app/transfer/model/transfer';
import { EmissionData } from '../../model/EmissionData';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transferByStatus.component.html',
  styleUrls: ['./transferByStatus.component.css'],
})
export class TransferByStatus implements OnInit {
  CLIENTS!: Client[];
  agencyId: string;
  LISTTRANSFERT!: Transfer[];
  statuss:Status[];
  selected2:any;
  

  dataSource = new MatTableDataSource<Transfer>(this.LISTTRANSFERT);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'ref',
    'codePin',
    'montant',
    'clientSrc',
    'clientDst',
    'status',
    'modeCost',
    'mode',
    'transferDate',
    'exprDate',
    'actions'
  ];

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private clientService: ClientService, public dialog: MatDialog,private transfertService:TransferEspeceService) {
    this.agencyId = sessionStorage.getItem('agency');
    console.log(this.agencyId);
  }

  deleteClient(id: number) {
    this.clientService.delete(id).subscribe(
      (data) => {
        console.log(data);

        this.clientService.findAll().subscribe(
          (data) => {
            this.CLIENTS = data;
            this.dataSource = new MatTableDataSource<Client>(this.CLIENTS);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Client>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }
  

  ngOnInit(): void {
    console.log('salam');
    this.statuss = [Status.Aservir,Status.Servie,Status.Bloqué,Status.Debloqué,
    Status.Endeshérence,Status.Extourné,Status.Restitué]
    // this.statuss.push(Status.Aservir);
    // this.statuss.push(Status.Servie);
    // this.statuss.push(Status.Extourné);
    // this.statuss.push(Status.Restitué);
    // this.statuss.push(Status.Bloqué);
    // this.statuss.push(Status.Debloqué);
    // this.statuss.push(Status.Endeshérence);


    let status = "Aservir";
    this.transfertService.findByStatus(status).subscribe(
      (data) => {
        console.log(data);
        this.LISTTRANSFERT = data;
        this.dataSource = new MatTableDataSource<Transfer>(this.LISTTRANSFERT);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
        this.dataSource = new MatTableDataSource<Client>(null);
      }
    );
  }

  
  openDialogg(code: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous Servir ce Transfert ' + code + '?',
        codeSupp: code.toString(),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let emd:EmissionData={
          transfer:code,
          agent:parseInt(sessionStorage.getItem("currentAgentId")),
          agence:parseInt(sessionStorage.getItem("pointdevente"))

        }
        this.transfertService.servirTransfert(emd).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  getStatus(status:Status){
    this.selected2=status
    console.log(status);
    this.transfertService.findByStatus(status).subscribe(
      (data) => {
        console.log(data);
        this.LISTTRANSFERT = data;
        this.dataSource = new MatTableDataSource<Transfer>(this.LISTTRANSFERT);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
        this.dataSource = new MatTableDataSource<Client>(null);
      }
    );
    


  }
  
}
