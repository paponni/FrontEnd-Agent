
export class TransferEspece {
  id?: number;
  ref?: string;
  codePin?: string;
  montant?: number;
  clientSrc?: number;
  clientDst?:number;
  status?: Status ;
  modeCost?:ModeCost;
  mode?:EmissionType;
  transferDate?:Date;
  exprDate?:Date;



}
export enum Status{
  Aservir="Aservir",
  Servie="Servie",
  Extourné="Extourné",
  Restitué="Restitué",
  Bloqué="Bloqué",
  Debloqué="Debloqué",
  Endeshérence="Endeshérence",
 }
 export enum ModeCost{
  Source="Source",
  Destination="Destination",
  Partagé="Partagé",
 }
 export enum EmissionType{
  ByAgent,
  ByGab,
  ToAccount,  
 }
 
