//export interface IEvent {
//  id: number
//  name: string
//  date: Date
//  time: string
//  price: number
//  imageUrl: string
//  location?: {
//    address: string
//    city: string
//    country: string
//  }
//  onlineUrl?: string
//  sessions: ISession[]
//}

export interface IEvnmt {
  id: number
  groupe_id: number
  location_id
  nom: string
  date: Date
  hrdeb: Date
  hrfin: Date
  titre: string
  statut: string
  descr: string
  contenu: string
  rapport: string
  resp1: string
  resp2: string
  affich: boolean
  groupe: IGroupe
  location: ILocation
  evnmtdtls: IEvnmtdtl[]
}
export interface IEvnmtdtl {
  id: number
  evnmt_id: number
  titre: string
  resp: string
  resume: string
  contenu: string
  duree: number
}

export interface IGroupe {
  id: number
  nom: string
  mtle_reg: string
  descr: string
  dtcre: Date
  dureexo: number
  dbexo: Date
  cfinexo: Date
  contact: string
  location_id: number
  tel: string
}

export interface ILocation {
  id: number 
  address: string 
  city: string  
  country: string      
}


