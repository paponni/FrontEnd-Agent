import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferEspece } from '../../model/transferEspece';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TransferEspeceService } from '../../service/transferEspece.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/account/model/account';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Transfer } from 'src/app/transfer/model/transfer';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transferEspece-list.component.html',
  styleUrls: ['./transferEspece-list.component.css'],
})
export class TransferEspeceListComponent implements OnInit {
  status: string;
  
  
  //transfers
  TRANSFERS!: Transfer[];
  dataSource = new MatTableDataSource<Transfer>(this.TRANSFERS);
  displayedColumns: string[] = [
    'dateCreation',
    'mentant',
    'nombreDeBeneficiare',
    'status',
    'client',
    'actions',
    
   
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(
    private transferService: TransferEspeceService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.status = this.route.snapshot.params['status'];

  }

  ngOnInit(): void {
    //transfer
    this.transferService.findByStatus(this.status).subscribe(
      (data) => {
        this.TRANSFERS = data;

        this.dataSource = new MatTableDataSource<Transfer>(this.TRANSFERS);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        this.dataSource = new MatTableDataSource<Transfer>(null);
      }
    );
  }
  checkSender(name: string) {
    if (sessionStorage.getItem('name') === name) {
      return true;
    }
    {
      return false;
    }
  }
  openConfirmation(id :number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous confirmer virement ' + '?',
        idVir : id ,
        
      },
    });



  }
}
