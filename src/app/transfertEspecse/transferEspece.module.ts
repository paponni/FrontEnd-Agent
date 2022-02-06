import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferEspeceRoutingModule } from './transferEspece-routing.module';
import { TransferEspeceFormComponent } from './components/transferEspece-form/transferEspece-form.component';
import { TransferEspeceListComponent } from './components/transferEspece-list/transferEspece-list.component';
import { TransferEspeceDoneComponent } from './components/transferEspece-done/transferEspece-done.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TransferEspeceFormComponent, TransferEspeceListComponent, TransferEspeceDoneComponent],
  imports: [CommonModule, TransferEspeceRoutingModule, SharedModule],
})
export class TransferModule {}
