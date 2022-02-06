import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { ClientFormComponent } from './client/components/client-form/client-form.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AccountFormComponent } from './account/components/account-form/account-form.component';
import { AuthGuardService } from './authentification/services/auth-guard.service';
import { TransferFormComponent } from './transfer/components/transfer-form/transfer-form.component';
import { TransferListComponent } from './transfer/components/transfer-list/transfer-list.component';
import { TransferDoneComponent } from './transfer/components/transfer-done/transfer-done.component';
import { TransferEspeceFormComponent } from './transfertEspecse/components/transferEspece-form/transferEspece-form.component';
import { TransferEspeceListComponent } from './transfertEspecse/components/transferEspece-list/transferEspece-list.component';
import { TransferEspeceDoneComponent } from './transfertEspecse/components/transferEspece-done/transferEspece-done.component';
import { TransferByStatus } from './transfertEspecse/components/transferByStatus/transferByStatus.component';
import { ClientBenefComponent } from './client/components/client-benef/client-benef.component';
import { BenefFormComponent } from './client/components/benef-form/benef-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clients',
    component: ClientListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'clientForm',
    component: ClientFormComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'client/:id/accounts',
    component: AccountListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'client/:id/accountForm',
    component: AccountFormComponent,
    canActivate: [AuthGuardService],
  },
  
  {
    path: 'compte/:id/transfertForm',
    component: TransferFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'compte/:id/transfets',
    component: TransferListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'transfertEffectue/:id',
    component: TransferDoneComponent,
    canActivate: [AuthGuardService],
  },


  //here routes for transfer by espece
  
  {
    path: 'transferEspeceForm',
    component: TransferEspeceFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'transferEspece',
    component: TransferEspeceListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'transferEspeceEffectue/:id',
    component: TransferEspeceDoneComponent,
    canActivate: [AuthGuardService],
  },
  
  {
    path: 'transferByStatus',
    component: TransferByStatus,
    canActivate: [AuthGuardService],
  },
  {
    path: 'client/:id/beneficiaires',
    component: ClientBenefComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'beneficiareForm',
    component: BenefFormComponent,
    canActivate: [AuthGuardService],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
