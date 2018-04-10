
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


export interface IEngmtpers {
  id: number
  engmt_id: number
  pers_id: number
  exercice: number
  statut: string			// new
  dtchgst: Date			// new
  message: string			// new
  dt_ech: Date			// new
}

