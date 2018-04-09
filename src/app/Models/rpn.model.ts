
export interface IRpnpers {
    id: number
    firstName: string
    lastName: string
    name: string
	email: string			// new
	password: string			// new
	admin: boolean			// new
	groupe_id: number			// new
}

//$table ->increments('id');
//$table ->integer('groupe_id');
//$table ->integer('pers_id');		  //(fk vers table personne, la personne inscrite)
//$table ->integer('repdt_id');		// (fk vers table personne, le répondant doit être une personne de type membre)
//$table ->dateTime('dtadh');		//   (date d'adhésion)
//$table ->string('mtrle');		//  (matricule rpn)
//$table ->integer('depot');
//$table ->dateTime('dtmajdpt');

