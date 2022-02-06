import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Beneficiare } from 'src/app/transfer/model/Beneficiare';
import { Client } from '../../model/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client-benef',
  templateUrl: './client-benef.component.html',
  styleUrls: ['./client-benef.component.css']
})
export class ClientBenefComponent implements OnInit {
  BENEFICIARES?:Beneficiare[];
  displayedColumns: string[] = [
    'id',
    'pieceIdentite',
    'numIdentite',
    'gsm',
    'blackLister'
  
  ];
  dataSource = new MatTableDataSource<Beneficiare>(this.BENEFICIARES);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private clientService: ClientService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }
  deleteBenef(id: number) {
    this.clientService.deleteBenef(id).subscribe(
      (data) => {
        console.log(data);

        this.clientService.findAllBenef().subscribe(
          (data) => {
            this.BENEFICIARES = data;
            this.dataSource = new MatTableDataSource<Beneficiare>(this.BENEFICIARES);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Beneficiare>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }
 
  
  openDialog(code: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous supprimer le beneficiare ' + code + '?',
        codeSupp: code,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteBenef(result.data.codeSupp);
      }
    });
  }
    

}

