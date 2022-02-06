import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfer-done',
  templateUrl: './transferEspece-done.component.html',
  styleUrls: ['./transferEspece-done.component.css'],
})
export class TransferEspeceDoneComponent implements OnInit {
  codeId: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.codeId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}
  goToTransfers() {
    this.router.navigate(['/compte/' + this.codeId + '/virements']);
  }
}
