
export interface ITont {
  id: number
  groupe_id: number		
  nom: string
  descr: string
  mtpart: number
  dtdeb: Date			// new
  dtfin: Date			// new
  cot_dern: string			// new
	
}


export interface ITontpers {
  id: number
  tont_id: number
  pers_id: number
  position: number
  alias: string
  comment: string
  dt_statut: Date

  nom: string
  descr: string
  mtpart: number
  groupe_id: number
  dtdeb: Date
  dtfin: Date
  cot_dern: string
  nom_prenom: string

}


