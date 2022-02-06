import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientItemComponent } from './components/client-item/client-item.component';
import { SharedModule } from '../shared/shared.module';
import { ClientBenefComponent } from './components/client-benef/client-benef.component';
import { BenefFormComponent } from './components/benef-form/benef-form.component';

@NgModule({
  declarations: [ClientListComponent, ClientFormComponent, ClientItemComponent, ClientBenefComponent,BenefFormComponent],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
})
export class ClientModule {}
