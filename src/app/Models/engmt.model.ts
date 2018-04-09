
export interface IEngmt {
  id: number
  groupe_id: number
  nom: string
  descr: string
  periodicite: string			// new
  periode: string			// new
  statut: string			// new
  mont_unit: number			// new
  totalper: number			// new
}


//$table ->increments('id');
//$table ->integer('groupe_id');
//$table ->string('nom');
//$table ->string('descr');
//$table ->string('periodicite');
//$table ->string('periode');
//$table ->string('statut');   ///--- valeurs: En cours, à venir, fermé selon la période
//$table ->integer('mont_unit');
//$table ->integer('totalper');   /// solde période



export interface IEngmtpers {
  id: number
  firstName: string
  lastName: string
  name: string
  email: string			// new
  password: string			// new
  admin: boolean			// new
  groupe_id: number			// new
}


//engmtpers {
//  $table ->increments('id');
//  $table ->integer('engmt_id');
//  $table ->integer('pers_id');		  // (fk vers table personne; contrainte: la personne doit être de type membre)
//  $table ->integer('exercice');
//  $table ->integer('mont');
//  $table ->string('statut');
//  $table ->string('dtchgst');
//  $table ->string('message');
//  $table ->dateTime('dt_ech');	
