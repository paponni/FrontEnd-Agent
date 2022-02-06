export class Beneficiare{
  id?: number;
  pieceIdentite?: TypePieceIdentite;
  numIdentite?: string;
  blackLister?:boolean;
  gsm?:string
 
}
enum TypePieceIdentite{
  CARTEIDENTITE,CERTIFICATMEDICAL
  ,PASSPORT,PERMISDECONDUITE,AUTRE,
}