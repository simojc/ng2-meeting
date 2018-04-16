
export interface IRpnpers {
    id: number
    groupe_id: number
    pers_id: number			// new
    repdt_id: number			// new
    dtadh: Date
    mtrle: string
    email: string			// new
    depot: number
    dtmajdpt: Date

     nom_pers:string
     prenom_pers:string
     nom_repdt: string
     prenom_repdt : string
}
//$table ->increments('id');
//$table ->integer('groupe_id');
//$table ->integer('pers_id');		  //(fk vers table personne, la personne inscrite)
//$table ->integer('repdt_id');		// (fk vers table personne, le répondant doit être une personne de type membre)
//$table ->dateTime('dtadh');		//   (date d'adhésion)
//$table ->string('mtrle');		//  (matricule rpn)
//$table ->integer('depot');
//$table ->dateTime('dtmajdpt');

