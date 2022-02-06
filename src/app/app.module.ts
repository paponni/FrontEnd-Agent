import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientModule } from './client/client.module';
import { AccountModule } from './account/account.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHtppInterceptorService } from './authentification/services/basic-auth-http-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { TransferModule } from './transfer/transfer.module';
import { TransferEspeceFormComponent } from './transfertEspecse/components/transferEspece-form/transferEspece-form.component';
import { TransferEspeceListComponent } from './transfertEspecse/components/transferEspece-list/transferEspece-list.component';
import { TransferEspeceDoneComponent } from './transfertEspecse/components/transferEspece-done/transferEspece-done.component';
import { TransferByStatus } from './transfertEspecse/components/transferByStatus/transferByStatus.component';



@NgModule({
  declarations: [AppComponent,TransferEspeceFormComponent,TransferEspeceListComponent,TransferEspeceDoneComponent,TransferByStatus],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    AccountModule,
    AuthentificationModule,
    SharedModule,
    TransferModule,
  
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
})
export class AppModule {}
