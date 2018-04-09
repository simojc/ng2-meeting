
export interface IPers {
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
//$table ->integer('user_id') ->nullable(false); 		//  (Une personne est rattacé à un utilisateur existant, ce qui fait aussi le lien avec le groupe)
//$table ->string('type') ->nullable(false);				// (membre,fils/fille du membre, conjoint/conjointe du membre,  cousin/cousine du membre, niece/neuveu du membre, frère / soeur du membre, ami/amie du membre, autre lien du membre)
//$table ->string('nom');
//$table ->string('prenom');
//$table ->string('sexe') ->nullable(false);
//$table ->string('email') ->nullable(false);
//$table ->string('telcel');
//$table ->string('telres') ->nullable(false);
//$table ->integer('location_id') ->nullable(false); 				  /// Adresse du groupe	  FK vers location
//$table ->string('emploi');
//$table ->string('dom_activ') ->nullable();	 	//	(domaine d'activité de la personne)
//$table ->string('titre_adh') ->nullable();	
